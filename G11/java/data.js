const teacherDataByDay = {
    Monday: {
        classA: { period1: "92 / 186", period2: "170", period3: "62 / 84 / 120 / 74 / 181 / 119 / 86 / 68", period4: "62 / 84 / 120 / 74 / 181 / 119 / 86 / 68", period5: null, period6: "37 / MK / 49 / 127 / 64 / 124 / 151", period7: "106", period8: "75", period9: "60" },
        classB: { period1: "54", period2: "54", period3: "62 / 84 / 120 / 74 / 181 / 119 / 86 / 68", period4: "62 / 84 / 120 / 74 / 181 / 119 / 86 / 68", period5: null, period6: "37 / MK / 49 / 127 / 64 / 124 / 151", period7: "136 / 187", period8: "61", period9: "75" },
        classC: { period1: "85", period2: "90", period3: "62 / 84 / 120 / 74 / 181 / 119 / 86 / 68", period4: "62 / 84 / 120 / 74 / 181 / 119 / 86 / 68", period5: null, period6: "37 / MK / 49 / 127 / 64 / 124 / 151", period7: "29", period8: "29", period9: "201" },
        classD: { period1: "163", period2: "201", period3: "201", period4: "90", period5: null, period6: "130", period7: "69", period8: "169" },
        classE: { period1: "63", period2: "131 / 59 / 53", period3: "131 / 59 / 53", period4: "107", period5: null, period6: "121", period7: "121", period8: "190", period9: "90" },
        classF: { period1: "62", period2: "131 / 59 / 53", period3: "131 / 59 / 53", period4: "75", period5: null, period6: "78", period7: "78", period8: "95", period9: "95" }
    },
    Tuesday: {
        classA: { period1: "92 / 186", period2: "170", period3: "37 / MK / 49 / 127 / 64 / 124 / 151", period4: "37 / MK / 49 / 127 / 64 / 124 / 151", period5: null, period6: "75", period7: "106", period8: "123 / 23 / 139 / 118 / MM / 14 / 201 / 162", period9: "123 / 23 / 139 / 118 / MM / 14 / 201 / 162" },
        classB: { period1: "54", period2: "109", period3: "37 / MK / 49 / 127 / 64 / 124 / 151", period4: "37 / MK / 49 / 127 / 64 / 124 / 151", period5: null, period6: "136 / 187", period7: "61", period8: "123 / 23 / 139 / 118 / MM / 14 / 201 / 162", period9: "123 / 23 / 139 / 118 / MM / 14 / 201 / 162" },
        classC: { period1: "85", period2: "130", period3: "37 / MK / 49 / 127 / 64 / 124 / 151", period4: "37 / MK / 49 / 127 / 64 / 124 / 151", period5: null, period6: "29", period7: "201", period8: "123 / 23 / 139 / 118 / MM / 14 / 201 / 162", period9: "123 / 23 / 139 / 118 / MM / 14 / 201 / 162" },
        classD: { period1: "163", period2: "201", period3: "OP01", period4: "OP01", period5: null, period6: "90", period7: "69", period8: "69" },
        classE: { period1: "63", period2: "63", period3: "84 / 120 / 68 / 08 / 145 / 86 / 171 / 105 / 27 / 181", period4: "84 / 120 / 68 / 08 / 145 / 86 / 171 / 105 / 27 / 181", period5: null, period6: "131 / 59 / 53", period7: "107", period8: "90", period9: "121" },
        classF: { period1: "62", period2: "75", period3: "84 / 120 / 68 / 08 / 145 / 86 / 171 / 105 / 27 / 181", period4: "84 / 120 / 68 / 08 / 145 / 86 / 171 / 105 / 27 / 181", period5: null, period6: "131 / 59 / 53", period7: "95", period8: "78", period9: "78" }
    },
    Wednesday: {
        classA: { period1: "92 / 186", period2: "106", period3: "106", period4: "60", period5: null, period6: "123 / 23 / 139 / 118 / MM / 14 / 201 / 162", period7: "75", period8: "170", period9: "55" },
        classB: { period1: "54", period2: "109", period3: "75", period4: "75", period5: null, period6: "123 / 23 / 139 / 118 / MM / 14 / 201 / 162", period7: "61", period8: "136 / 187", period9: "136 / 187" },
        classC: { period1: "85", period2: "29", period3: "130", period4: "130", period5: null, period6: "123 / 23 / 139 / 118 / MM / 14 / 201 / 162", period7: "201", period8: "90", period9: "157" },
        classD: { period1: "163", period2: "69", period3: "OP03", period4: "OP03", period5: null, period6: "OP02", period7: "201", period8: "OP01" },
        classE: { period1: "63", period2: "107", period3: "37 / MK / 49 / 127 / 124 / 78 / 72 / 126 / 208 / 64 / 96 / 166", period4: "37 / MK / 49 / 127 / 124 / 78 / 72 / 126 / 208 / 64 / 96 / 166", period5: null, period6: "131 / 59 / 53", period7: "139 / 100 / 56 / 118 / 14 / 177 / MM", period8: "121", period9: "84 / 120 / 68 / 08 / 145 / 86 / 171 / 105 / 27 / 181" },
        classF: { period1: "62", period2: "75", period3: "37 / MK / 49 / 127 / 124 / 78 / 72 / 126 / 208 / 64 / 96 / 166", period4: "37 / MK / 49 / 127 / 124 / 78 / 72 / 126 / 208 / 64 / 96 / 166", period5: null, period6: "131 / 59 / 53", period7: "139 / 100 / 56 / 118 / 14 / 177 / MM", period8: "78", period9: "84 / 120 / 68 / 08 / 145 / 86 / 171 / 105 / 27 / 181" }
    },
    Thursday: {
        classA: { period1: "92 / 186", period2: "92 / 186", period3: "75", period4: "106", period5: null, period6: "106", period7: "60", period8: "55", period9: "170" },
        classB: { period1: "54", period2: "109", period3: "136 / 187", period4: "190", period5: null, period6: "75", period7: "61", period8: "61", period9: "54" },
        classC: { period1: "85", period2: "201", period3: "90", period4: "130", period5: null, period6: "130", period7: "29", period8: "29", period9: "157" },
        classD: { period1: "163", period2: "69", period3: "190", period4: "201", period5: null, period6: "90", period7: "130", period8: "130" },
        classE: { period1: "63", period2: "90", period3: "131 / 59 / 53", period4: "131 / 59 / 53", period5: null, period6: "37 / MK / 49 / 127 / 124 / 78 / 72 / 126 / 208 / 64 / 96 / 166", period7: "121", period8: "190", period9: "107" },
        classF: { period1: "62", period2: "78", period3: "131 / 59 / 53", period4: "131 / 59 / 53", period5: null, period6: "37 / MK / 49 / 127 / 124 / 78 / 72 / 126 / 208 / 64 / 96 / 166", period7: "190", period8: "95", period9: "75" }
    },
    Friday: {
        classA: { period1: "92 / 186", period2: "92 / 186", period3: "106", period4: "170", period5: "170", period6: "60", period7: "75", period8: "62 / 84 / 120 / 74 / 181 / 119 / 86 / 68" },
        classB: { period1: "54", period2: "136 / 187", period3: "136 / 187", period4: "190", period5: null, period6: "75", period7: "61", period8: "109", period9: "62 / 84 / 120 / 74 / 181 / 119 / 86 / 68" },
        classC: { period1: "85", period2: "90", period3: "130", period4: "130", period5: null, period6: "201", period7: "201", period8: "29", period9: "62 / 84 / 120 / 74 / 181 / 119 / 86 / 68" },
        classD: { period1: "163", period2: "130", period3: "190", period4: "69", period5: null, period6: "OP02", period7: "201", period8: "90" },
        classE: { period1: "63", period2: "63", period3: "131 / 59 / 53", period4: "107", period5: null, period6: "139 / 100 / 56 / 118 / 14 / 177 / MM", period7: "139 / 100 / 56 / 118 / 14 / 177 / MM", period8: "90", period9: "121" },
        classF: { period1: "190", period2: "78", period3: "131 / 59 / 53", period4: "75", period5: null, period6: "139 / 100 / 56 / 118 / 14 / 177 / MM", period7: "139 / 100 / 56 / 118 / 14 / 177 / MM", period8: "95", period9: "95" }
    }
};
