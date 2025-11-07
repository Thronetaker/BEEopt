#ifndef BEE_H
#define BEE_H

#ifdef _WIN32
#define DLL_EXPORT __declspec(dllexport)
#else
#define DLL_EXPORT
#endif

// DC Circuits
DLL_EXPORT double ohms_law(double V, double R, char mode);
DLL_EXPORT double dc_power(double V, double I);

// AC Circuits
DLL_EXPORT double impedance(double R, double XL, double XC);
DLL_EXPORT double reactance_inductive(double L, double f);
DLL_EXPORT double reactance_capacitive(double C, double f);

// Transformers
DLL_EXPORT double turns_ratio(double Np, double Ns);

// Motors
DLL_EXPORT double motor_torque(double P, double w);
DLL_EXPORT double motor_slip(double Ns, double Nr);

// Three Phase
DLL_EXPORT double three_phase_power(double V_L, double I_L, double pf);

#endif
