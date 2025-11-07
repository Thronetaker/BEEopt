#include "bee.h"   
#include <math.h>

#ifndef M_PI
#define M_PI 3.14159265358979323846
#endif

#ifdef _WIN32
#define DLL_EXPORT __declspec(dllexport)
#else
#define DLL_EXPORT
#endif

// --- DC Circuits ---
DLL_EXPORT double ohms_law(double V, double R, char mode) {
    switch(mode) {
        case 'V': return V * R;   // V = I * R
        case 'I': return V / R;   // I = V / R
        case 'R': return V / R;   // R = V / I
        default: return -1;
    }
}

DLL_EXPORT double dc_power(double V, double I) {
    return V * I;
}

// --- AC Circuits ---
DLL_EXPORT double impedance(double R, double XL, double XC) {
    return sqrt(R*R + (XL - XC)*(XL - XC));
}

DLL_EXPORT double reactance_inductive(double L, double f) {
    return 2 * M_PI * f * L;
}

DLL_EXPORT double reactance_capacitive(double C, double f) {
    return 1 / (2 * M_PI * f * C);
}

// --- Transformers ---
DLL_EXPORT double turns_ratio(double Np, double Ns) {
    return Np / Ns;
}

// --- Motors ---
DLL_EXPORT double motor_torque(double P, double w) {
    if(w == 0) return 0;
    return P / w;
}

DLL_EXPORT double motor_slip(double Ns, double Nr) {
    return (Ns - Nr) / Ns;
}

// --- Three Phase ---
DLL_EXPORT double three_phase_power(double V_L, double I_L, double pf) {
    return sqrt(3) * V_L * I_L * pf;
}
