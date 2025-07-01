const teacherDataByDay = {
    Monday: {
        classA: {
            period1: "HKAU", // MATH
            period2: "DOLU", // MATH
            period3: "AES", // SCI
            period4: "AES", // Hist
            period5: null,    // INTERVAL
            period6: "WHG", // TUTS
            period7: "WAGN",   // TUSI
            period8: "JHG",  // Buch
            period9: "KLWA"    // OPT2
        },
        classB: {
            period1: "ASMA",  // MATH
            period2: "HKD",  // MATH
            period3: "AES",  // SCI
            period4: "AES",  // SING
            period5: null,    // INTERVAL
            period6: "SMYD", // TUSI
            period7: "MKRC",  // Hist
            period8: "UGRD", // Eng
            period9: "WN"    // OPT2
        },
        classC: {
            period1: "MVHD",  // MATH
            period2: "ASMA",  // MATH
            period3: "AES",  // SCI
            period4: "AES",  // Eng
            period5: null,    // INTERVAL
            period6: "JHG",  // SING
            period7: "SMYD",  // TUSI
            period8: "GHDC",  // Hist
            period9: "MVHD"   // Buch
        },
        classD: {
            period1: "WMST",  // SCI
            period2: "EMDD",  // TUTS
            period3: "HPAT",  // SING
            period4: "SPUM",  // MATH
            period5: null,    // INTERVAL
            period6: "VH", // MATH
            period7: "AATA",  // MATH
            period8: "WN",  // OPT3
            period9: "KHNL"  // OPT3
        },
        classE: {
            period1: "UGWA",  // SCI
            period2: "PGPW",  // SCI
            period3: "STIN",  // Eng
            period4: "ADGU",  // SING
            period5: null,    // INTERVAL
            period6: "WAGN",  // MATH
            period7: "ADGU",  // MATH
            period8: "ADGU",  // OPT3
            period9: "GISA"   // OPT3
        },
        classF: {
            period1: "KSJM",  // Hist
            period2: "SMMM",  // Eng
            period3: "WN",   // SCI
            period4: "SHPH",  // SING
            period5: null,    // INTERVAL
            period6: "YMS",  // MATH
            period7: "YMS",  // MATH
            period8: "ASMA",  // OPT3
            period9: "UGRD"   // OPT3
        },
    },
    
    Tuesday: {
        classA: {
            period1: "JHG",  // SCI
            period2: "WHG",  // MATH
            period3: "WTKK",   // SING
            period4: "MVHD",   // SING
            period5: null,    // INTERVAL
            period6: "HKAU",   // OPT2
            period7: "UGRD",   // OPT2
            period8: "DOLU",  // SCI
            period9: "ASMA"    // SING
        },
        classB: {
            period1: "HKD",  // SCI
            period2: "MKRC",  // MATH
            period3: "EMDD",  // SING
            period4: "SMYD",  // SING
            period5: null,    // INTERVAL
            period6: "UGRD",   // OPT2
            period7: "MWCH",   // OPT2
            period8: "MG",  // Eng
            period9: "KSRI"   // TUTS
        },
        classC: {
            period1: "GHDC",  // Hist
            period2: "HMCN",  // LIBR
            period3: "UGRD",  // MATH
            period4: "UGRD",  // Eng
            period5: null,    // INTERVAL
            period6: "JHG",  // OPT2
            period7: "SMYD", // OPT2
            period8: "WAGN", // SCI
            period9: "WN"  // Eng
        },
        classD: {
            period1: "WMST",    // Eng
            period2: "KSRI",  // MATH
            period3: "AATA",  // Budh
            period4: "PGPW", // SING
            period5: null,    // INTERVAL
            period6: "HPAT",  // SCI
            period7: "SPUM",  // Hist
            period8: "KGSD",  // SING
            period9: "KGSD"    // Eng
        },
        classE: {
            period1: "UGWA",    // Eng
            period2: "ADGU",  // MATH
            period3: "HGAH",  // Budh
            period4: "WTKK", // SING
            period5: null,    // INTERVAL
            period6: "GISA",  // SCI
            period7: "GISA",  // Hist
            period8: "KLWA",  // SING
            period9: "STIN"    // Eng
        },
    
        classF: {
            period1: "KSJM",    // Eng
            period2: "SMMM",  // MATH
            period3: "KSRI",  // Budh
            period4: "WN", // SING
            period5: null,    // INTERVAL
            period6: "MVHD",  // SCI
            period7: "IAGA",  // Hist
            period8: "SHPH",  // SING
            period9: "MWCH"    // Eng
        },
    },
    Wednesday: {
        classA: {
            period1: "HKAU",    // Eng
            period2: "DOLU",  // MATH
            period3: "WHG",  // Budh
            period4: "WHG", // SING
            period5: null,    // INTERVAL
            period6: "EMDD",  // SCI
            period7: "MWCH",  // Hist
            period8: "JHG",  // SING
            period9: "AES"    // Eng
        },
   
        classB: {
            period1: "PMNS",    // Eng
            period2: "WN",  // MATH
            period3: "SMYD",  // Budh
            period4: "HKD", // SING
            period5: null,    // INTERVAL
            period6: "MKRC",  // SCI
            period7: "MKRC",  // Hist
            period8: "MG",  // SING
            period9: "AES"    // Eng
        },
   
        classC: {
            period1: "WAGN",    // Eng
            period2: "SMYD",  // MATH
            period3: "HMCN",  // Budh
            period4: "GHDC", // SING
            period5: null,    // INTERVAL
            period6: "APA",  // SCI
            period7: "JHG",  // Hist
            period8: "MWCH",  // SING
            period9: "AES"    // Eng
        },

        classD: {
            period1: "SPUM",    // Eng
            period2: "KGSD",  // MATH
            period3: "HPAT",  // Budh
            period4: "VH", // SING
            period5: null,    // INTERVAL
            period6: "AES",  // SCI
            period7: "KHNL",  // Hist
            period8: "AATA",  // SING
            period9: "PGPW"    // Eng
        },

        classE: {
            period1: "PGPW",    // Eng
            period2: "GISA",  // MATH
            period3: "STIN",  // Budh
            period4: "ADGU", // SING
            period5: null,    // INTERVAL
            period6: "AES",  // SCI
            period7: "UGWA",  // Hist
            period8: "ADGU",  // SING
            period9: "EMDD"    // Eng
        },

        classF: {
            period1: "SHPH",    // Eng
            period2: "KSJM",  // MATH
            period3: "SMMM",  // Budh
            period4: "ASMA", // SING
            period5: null,    // INTERVAL
            period6: "AES",  // SCI
            period7: "EMDD",  // Hist
            period8: "KSRI",  // SING
            period9: "IAGA"    // Eng
        },

    Thursday: {
        classA: {
            period1: "WTKK",    // Eng
            period2: "WTKK",  // MATH
            period3: "MWCH",  // Budh
            period4: "JHG", // SING
            period5: null,    // INTERVAL
            period6: "HKAU",  // SCI
            period7: "DOLU",  // Hist
            period8: "WHG",  // SING
            period9: "WAGN"    // Eng
        },
  
        classB: {
            period1: "ASMA",    // Eng
            period2: "MKRC",  // MATH
            period3: "SMYD",  // Budh
            period4: "MWCH", // SING
            period5: null,    // INTERVAL
            period6: "HLDP",  // SCI
            period7: "HLDP",  // Hist
            period8: "ASMA",  // SING
            period9: "HKD"    // Eng
        },
       
        classC: {
            period1: "HMCN",    // Eng
            period2: "JHG",  // MATH
            period3: "ASMA",  // Budh
            period4: "SMYD", // SING
            period5: null,    // INTERVAL
            period6: "GHDC",  // SCI
            period7: "GHDC",  // Hist
            period8: "APA",  // SING
            period9: "EMDD"    // Eng
                
        },
 
        classD: {
            period1: "WMST",    // Eng
            period2: "SPUM",  // MATH
            period3: "KSRI",  // Budh
            period4: "PGPW", // SING
            period5: null,    // INTERVAL
            period6: "AATA",  // SCI
            period7: "AATA",  // Hist
            period8: "WN",  // SING
            period9: "HPAT"    // Eng
        },
  
        classE: {
            period1: "PGPW",    // Eng
            period2: "GISA",  // MATH
            period3: "PGPW",  // Budh
            period4: "STIN", // SING
            period5: null,    // INTERVAL
            period6: "KLWA",  // SCI
            period7: "UGWA",  // Hist
            period8: "WTKK",  // SING
            period9: "WTKK"    // Eng
        },

        classF: {
            period1: "SHPH",    // Eng
            period2: "KSJM",  // MATH
            period3: "IAGA",  // Budh
            period4: "IAGA", // SING
            period5: null,    // INTERVAL
            period6: "YMS",  // SCI
            period7: "SMMM",  // Hist
            period8: "SMMM",  // SING
            period9: "MVHD"    // Eng
  
        }
    },  
    },
    Friday: {
        classA: {
            period1: "MVHD",    // Eng
            period2: "DOLU",  // MATH
            period3: "HKAU",  // Budh
            period4: "ASMA", // SING
            period5: null,    // INTERVAL
            period6: "HKAU",  // SCI
            period7: "UGRD",  // Hist
            period8: "KLWA",  // SING
            period9: "JHG"    // Eng
        },
    
        classB: {
            period1: "ASMA",    // Eng
            period2: "MG",  // MATH
            period3: "KSRI",  // Budh
            period4: "HKD", // SING
            period5: null,    // INTERVAL
            period6: "PMNS",  // SCI
            period7: "PMNS",  // Hist
            period8: "SMYD",  // SING
            period9: "MKRC"    // Eng
        },
  
        classC: {
            period1: "UGRD",    // Eng
            period2: "JHG",  // MATH
            period3: "GHDC",  // Budh
            period4: "SMYD", // SING
            period5: null,    // INTERVAL
            period6: "HMCN",  // SCI
            period7: "HMCN",  // Hist
            period8: "MWCH",  // SING
            period9: "WN"    // Eng
        },
        classD: {
            period1: "PGPW",    // Eng
            period2: "SPUM",  // MATH
            period3: "AATA",  // Budh
            period4: "HPAT", // SING
            period5: null,    // INTERVAL
            period6: "WMST",  // SCI
            period7: "WMST",  // Hist
            period8: "AES",  // SING
            period9: "AES"    // Eng
        },
        classE: {
            period1: "UGWA",    // Eng
            period2: "STIN",  // MATH
            period3: "HGAH",  // Budh
            period4: "WAGN", // SING
            period5: null,    // INTERVAL
            period6: "GISA",  // SCI
            period7: "ADGU",  // Hist
            period8: "AES",  // SING
            period9: "AES"    // Eng
        },
        classF: {
            period1: "SHPH",    // Eng
            period2: "SMMM",  // MATH
            period3: "KSJM",  // Budh
            period4: "IAGA", // SING
            period5: null,    // INTERVAL
            period6: "UGRD",  // SCI
            period7: "MWCH",  // Hist
            period8: "AES",  // SING
            period9: "AES"    // Eng
        },
    },
};
