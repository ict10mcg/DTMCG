const teacherDataByDay = {
    Monday: {
        classA: {
            period1: "MKRC", // MATH
            period2: "MKRC", // MATH
            period3: "KKGB", // SCI
            period4: "MVHD", // Hist
            period5: null,    // INTERVAL
            period6: "KKGB", // TUTS
            period7: "HKD",   // TUSI
            period8: "HRNG",  // Buch
            period9: "OPT2A"    // OPT2
        },
        classB: {
            period1: "BPLA",  // MATH
            period2: "BPLA",  // MATH
            period3: "HLDP",  // SCI
            period4: "STIN",  // SING
            period5: null,    // INTERVAL
            period6: "STIN", // TUSI
            period7: "WARW",  // Hist
            period8: "KSJM", // Eng
            period9: "OPT2A"    // OPT2
        },
        classC: {
            period1: "NMHS",  // MATH
            period2: "NMHS",  // MATH
            period3: "NPAM",  // SCI
            period4: "SDJP",  // Eng
            period5: null,    // INTERVAL
            period6: "NUWA",  // SING
            period7: "NUWA",  // TUSI
            period8: "KSRI",  // Hist
            period9: "OPT2A"   // Buch
        },
        classD: {
            period1: "NPAM",  // SCI
            period2: "NPAM",  // TUTS
            period3: "MMGG",  // SING
            period4: "SANP",  // MATH
            period5: null,    // INTERVAL
            period6: "GISA", // MATH
            period7: "GISA",  // MATH
            period8: "OPT3B",  // OPT3
            period9: "OPT3B"  // OPT3
        },
        classE: {
            period1: "IAGA",  // SCI
            period2: "IAGA",  // SCI
            period3: "SMYD",  // Eng
            period4: "YASK",  // SING
            period5: null,    // INTERVAL
            period6: "GHDC",  // MATH
            period7: "GHDC",  // MATH
            period8: "OPT3B",  // OPT3
            period9: "OPT3B"   // OPT3
        },
        classF: {
            period1: "UJTC",  // Hist
            period2: "SMYD",  // Eng
            period3: "WHG",   // SCI
            period4: "MDMU",  // SING
            period5: null,    // INTERVAL
            period6: "BPLA",  // MATH
            period7: "BPLA",  // MATH
            period8: "OPT3B",  // OPT3
            period9: "OPT3B"   // OPT3
        }
    },
    Tuesday: {
        classA: {
            period1: "KKGB",  // SCI
            period2: "RPKU",  // MATH
            period3: "MKRC",   // SING
            period4: "HKD",   // SING
            period5: null,    // INTERVAL
            period6: "OPT2A",   // OPT2
            period7: "OPT2A",   // OPT2
            period8: "HRNG",  // SCI
            period9: "HKD"    // SING
        },
        classB: {
            period1: "HLDP",  // SCI
            period2: "KSJM",  // MATH
            period3: "BPLA",  // SING
            period4: "STIN",  // SING
            period5: null,    // INTERVAL
            period6: "OPT2A",   // OPT2
            period7: "OPT2A",   // OPT2
            period8: "WARW",  // Eng
            period9: "HLDP"   // TUTS
        },
        classC: {
            period1: "KHNL",  // Hist
            period2: "SDJP",  // LIBR
            period3: "NMHS",  // MATH
            period4: "SDJP",  // Eng
            period5: null,    // INTERVAL
            period6: "OPT2A",  // OPT2
            period7: "OPT2A", // OPT2
            period8: "NUWA", // SCI
            period9: "NPAM"  // Eng
        },
        classD: {
            period1: "NS",    // Eng
            period2: "GISA",  // MATH
            period3: "NS",  // Budh
            period4: "KSRI", // SING
            period5: null,    // INTERVAL
            period6: "OPT3B",  // SCI
            period7: "ASMA",  // Hist
            period8: "ASMA",  // SING
            period9: "SANP"    // Eng
        },
        classE: {
            period1: "SMYD",  // Eng
            period2: "GHDC",  // MATH
            period3: "YASK",   // LIBR
            period4: "LIBR",  // Hist
            period5: null,    // INTERVAL
            period6: "KHNL",  // SCI
            period7: "OPT3B",  // TUTS
            period8: "IAGA",  // Eng
            period9: "IAGA"   // SING
        },
        classF: {
            period1: "UJTC",  // Hist
            period2: "BPLA",  // MATH
            period3: "WHG",   // TUTS
            period4: "WAGN",  // Budh
            period5: null,    // INTERVAL
            period6: "OPT3B", // SING
            period7: "SMYD",  // Eng
            period8: "SMYD",   // SCI
            period9: "LIOB"   // LIBR
        }
    },
    Wednesday: {
        classA: {
            period1: "MKRC",  // MATH
            period2: "RPKU",   // Budh
            period3: "HKD",    // SING
            period4: "HRNG",   // Eng
            period5: null,     // INTERVAL
            period6: "KKGB",  // SCI
            period7: "OPT1A",  // OPT1
            period8: "OPT3A",   // Hist
            period9: "HRNG"    // Eng
        },
        classB: {
            period1: "BPLA",  // MATH
            period2: "HLDP",  // Eng
            period3: "WARW",  // Hist
            period4: "KSJM",   // Eng
            period5: null,     // INTERVAL
            period6: "OPT1A",  // SING
            period7: "OPT3A",  // OPT1
            period8: "HLDP",  // SCI
            period9: "KSRI"   // Hist
        },
        classC: {
            period1: "NMHS",  // MATH
            period2: "NPAM",  // SCI
            period3: "NPAM",  // SING
            period4: "NUWA",  // Eng
            period5: null,     // INTERVAL
            period6: "KHNL",   // Hist
            period7: "OPT1A",   // OPT1
            period8: "OPT3A",   // TUTS
            period9: "SDJP"    // Eng
        },
        classD: {
            period1: "OPT2B",    // OPT2
            period2: "OPT2B",    // OPT2
            period3: "OPT1B",   // OPT1
            period4: "SANP",  // SING
            period5: null,    // INTERVAL
            period6: "GISA",   // MATH
            period7: "GISA",   // MATH
            period8: "NS",     // Eng
            period9: "NPAM"   // SCI
        },
        classE: {
            period1: "OPT2B",    // OPT2
            period2: "OPT2B",   // OPT2
            period3: "OPT1B",   // Budh
            period4: "MACH",  // Eng
            period5: null,    // INTERVAL
            period6: "GHDC",   // MATH
            period7: "GHDC",  // MATH
            period8: "SMYD",   // SING
            period9: "YASK"    // SCI
        },
        classF: {
            period1: "OPT2B",    // OPT2
            period2: "OPT2B",    // OPT2
            period3: "OPT1B",   // OPT1
            period4: "SMYD",   // Eng
            period5: null,     // INTERVAL
            period6: "BPLA",    // SCI
            period7: "BPLA",   // SING
            period8: "WHG",   // Hist
            period9: "MDMU"     // SCPR
        }
    },
    Thursday: {
        classA: {
            period1: "MKRC",   // Hist
            period2: "MVHD",   // OPT3
            period3: "OPT3A",    // SING
            period4: "OPT3A",   // Eng
            period5: null,     // INTERVAL
            period6: "HKD",    // SING
            period7: "LIOB",   // SCPR
            period8: "KKGB",   // Budh
            period9: "KKGB"    // Eng
        },
        classB: {
            period1: "BPLA",   // Hist
            period2: "KSRI",   // OPT3
            period3: "OPT3A",   // SING
            period4: "OPT3A",   // Eng
            period5: null,     // INTERVAL
            period6: "STIN",   // SING
            period7: "KSJM",   // SCPR
            period8: "HLDP",   // Budh
            period9: "HLDP"    // Eng
        },
        classC: {
            period1: "NMHS",   // Hist
            period2: "SDJP",   // SING
            period3: "OPT3A",   // Eng
            period4: "OPT3A",   // SCI
            period5: null,     // INTERVAL
            period6: "NUWA",   // SING
            period7: "NPAM",   // SCPR
            period8: "KHNL",   // Buch
            period9: "KSRI"    // Eng
        },
        classD: {
            period1: "NS",     // Eng
            period2: "SANP",   // TUSI
            period3: "SANP",   // SCI
            period4: "NPAM",   // MATH
            period5: null,     // INTERVAL
            period6: "OPT1B",   // OPT1
            period7: "OPT1B",   // OPT1
            period8: "OPT2B",   // Hist
            period9: "GISA"    // SING
        },
        classE: {
            period1: "IAGA",   // Eng
            period2: "SMYD",   // SING
            period3: "YASK",   // Hist
            period4: "KHNL",   // MATH
            period5: null,     // INTERVAL
            period6: "OPT1B",  // OPT1
            period7: "OPT1B",  // OPT1
            period8: "OPT2B",   // Budh
            period9: "GHDC"    // Eng
        },
        classF: {
            period1: "SMYD",   // Eng
            period2: "MDMU",   // SING
            period3: "WHG",   // Hist
            period4: "WHG",   // MATH
            period5: null,     // INTERVAL
            period6: "OPT1B",   // OPT1
            period7: "OPT1B",   // OPT1
            period8: "OPT2B",   // Budh
            period9: "BPLA"    // Eng
        }
    },
    Friday: {
        classA: {
            period1: "MKRC",   // MATH
            period2: "MKRC",   // OPT1
            period3: "OPT1A",   // Eng
            period4: "OPT1A",   // SCI
            period5: null,     // INTERVAL
            period6: "MVHD",   // Hist
            period7: "KKGB",   // SCPR
            period8: "HRNG",    // SING
            period9: "HKD"    // Eng
        },
        classB: {
            period1: "BPLA",   // MATH
            period2: "BPLA",   // OPT1
            period3: "OPT1A",   // Eng
            period4: "OPT1A",   // SCI
            period5: null,     // INTERVAL
            period6: "KSJM",   // Hist
            period7: "HLDP",   // SCPR
            period8: "LIOB",   // LIBR
            period9: "STIN"    // Eng
        },
        classC: {
            period1: "NMHS",   // MATH
            period2: "NMHS",   // OPT1
            period3: "OPT1A",   // Eng
            period4: "OPT1A",   // SCI
            period5: null,     // INTERVAL
            period6: "NPAM",   // Hist
            period7: "NPAM",   // SCPR
            period8: "NUWA",   // SING
            period9: "SDJP"    // Eng
        },
        classD: {
            period1: "KSRI",   // Budh
            period2: "NPAM",  // SCPR
            period3: "NPAM",  // MATH
            period4: "GISA",  // Hist
            period5: null,    // INTERVAL
            period6: "ASMA",   // OPT2
            period7: "ASMA",   // OPT2
            period8: "NS",     // Eng
            period9: "SANP"    // SING
        },
        classE: {
            period1: "KHNL",  // Hist
            period2: "MACH",   // SCPR
            period3: "YASK",   // MATH
            period4: "GHDC",   // SCPR
            period5: null,     // INTERVAL
            period6: "IAGA",   // OPT2
            period7: "IAGA",   // OPT2
            period8: "YASK",   // TUSI
            period9: "SMYD"    // Eng
        },
        classF: {
            period1: "UJTC",   // Hist
            period2: "SMYD",    // SCPR
            period3: "WAGN",   // MATH
            period4: "PLA",    // SCPR
            period5: null,     // INTERVAL
            period6: "MDMU",   // OPT2
            period7: "MDMU",   // OPT2
            period8: "WHG",   // TUSI
            period9: "WHG"     // SCPR
        }
    }
};
