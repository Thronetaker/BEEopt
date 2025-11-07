#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "include/bee.h"

int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("Error: function name missing\n");
        return 1;
    }

    char *func = argv[1];

    if (strcmp(func, "ohms_law") == 0) {
        double V = atof(argv[2]);
        double R = atof(argv[3]);
        char mode = argv[4][0];
        double result = ohms_law(V, R, mode);
        printf("%f\n", result);
    } 
    else if (strcmp(func, "dc_power") == 0) {
        double V = atof(argv[2]);
        double I = atof(argv[3]);
        double result = dc_power(V, I);
        printf("%f\n", result);
    }
    else if (strcmp(func, "impedance") == 0) {
        double R = atof(argv[2]);
        double XL = atof(argv[3]);
        double XC = atof(argv[4]);
        double result = impedance(R, XL, XC);
        printf("%f\n", result);
    }
    else if (strcmp(func, "reactance_inductive") == 0) {
        double L = atof(argv[2]);
        double f = atof(argv[3]);
        double result = reactance_inductive(L, f);
        printf("%f\n", result);
    }
    else if (strcmp(func, "reactance_capacitive") == 0) {
        double C = atof(argv[2]);
        double f = atof(argv[3]);
        double result = reactance_capacitive(C, f);
        printf("%f\n", result);
    }
    else if (strcmp(func, "turns_ratio") == 0) {
        double Np = atof(argv[2]);
        double Ns = atof(argv[3]);
        double result = turns_ratio(Np, Ns);
        printf("%f\n", result);
    }
    else if (strcmp(func, "motor_torque") == 0) {
        double P = atof(argv[2]);
        double w = atof(argv[3]);
        double result = motor_torque(P, w);
        printf("%f\n", result);
    }
    else if (strcmp(func, "motor_slip") == 0) {
        double Ns = atof(argv[2]);
        double Nr = atof(argv[3]);
        double result = motor_slip(Ns, Nr);
        printf("%f\n", result);
    }
    else if (strcmp(func, "three_phase_power") == 0) {
        double V_L = atof(argv[2]);
        double I_L = atof(argv[3]);
        double pf = atof(argv[4]);
        double result = three_phase_power(V_L, I_L, pf);
        printf("%f\n", result);
    }
    else {
        printf("Error: Unknown function\n");
        return 1;
    }

    return 0;
}
