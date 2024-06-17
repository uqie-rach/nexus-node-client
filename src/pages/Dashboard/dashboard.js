import {
  RiBox2Fill,
  RiProfileFill,
  RiReceiptLine,
  RiTimeFill,
} from "@remixicon/react";

export const mockDashboard = [
  {
    category: "Total Tasks",
    count: 37,
    icon: RiBox2Fill,
    color: "blue",
    path: 'tasks'
  },
  {
    category: "Semester",
    count: 4,
    icon: RiTimeFill,
    color: "green",
    path: 'profile'
  },
  {
    category: "Total Projects",
    count: 34,
    icon: RiReceiptLine,
    color: "red",
    path: 'projects'
  },
  {
    category: "Total Subjects",
    count: 56,
    icon: RiProfileFill,
    color: "yellow",
    path: 'subjects'
  },
];

export const chartData = [
  {
    semester: 1,
    IP: 3.65,
    IPK: 3.65,
  },
  {
    semester: 2,
    IP: 3.92,
    IPK: 3.82,
  },
  {
    semester: 3,
    IP: 3.82,
    IPK: 3.8,
  },
  {
    semester: 4,
    IP: 3.84,
    IPK: 3.84,
  },
  {
    semester: 5,
    IP: null,
    IPK: null,
  },
  {
    semester: 6,
    IP: null,
    IPK: null,
  },
  {
    semester: 7,
    IP: null,
    IPK: null,
  },
  {
    semester: 8,
    IP: null,
    IPK: null,
  },
];

export const gradeCourse = [
  {
    semester: 1,
    subjects: [
      {
        code: "1565002",
        name: "KALKULUS",
        sks: 3,
        grade: "B+",
        mark: 10.5,
      },
      {
        code: "1565003",
        name: "ALGORITMA & PEMROGRAMAN 1",
        sks: 3,
        grade: "A",
        mark: 12,
      },
      {
        code: "1565004",
        name: "MATEMATIKA DISKRIT",
        sks: 3,
        grade: "B+",
        mark: 10.5,
      },
      {
        code: "1565031",
        name: "PRAKTIKUM ALGORITMA & PEMROGRAMAN 1",
        sks: 1,
        grade: "A",
        mark: 4,
      },
      {
        code: "20000011A01",
        name: "PANCASILA",
        sks: 2,
        grade: "B+",
        mark: 7,
      },
      {
        code: "20000011A03",
        name: "BAHASA INDONESIA",
        sks: 2,
        grade: "A",
        mark: 8,
      },
      {
        code: "20000011A04",
        name: "BAHASA ARAB I",
        sks: 2,
        grade: "B+",
        mark: 7,
      },
      {
        code: "20000011A05",
        name: "BAHASA ARAB II",
        sks: 2,
        grade: "B+",
        mark: 7,
      },
      {
        code: "20000011A10",
        name: "FILSAFAT ILMU",
        sks: 2,
        grade: "B+",
        mark: 7,
      },
      {
        code: "20060511C01",
        name: "INTRODUCTION TO COMPUTER SCIENCE",
        sks: 3,
        grade: "A",
        mark: 12,
      },
    ],
  },
  {
    semester: 2,
    subjects: [
      {
        code: "1565008",
        name: "ELEKTRONIKA DIGITAL",
        sks: 3,
        grade: "A",
        mark: 12,
      },
      {
        code: "1565010",
        name: "PEMROGRAMAN BERORIENTASI OBYEK",
        sks: 3,
        grade: "A",
        mark: 12,
      },
      {
        code: "1565033",
        name: "PRAKTIKUM ELEKTRONIKA DIGITAL",
        sks: 1,
        grade: "A",
        mark: 4,
      },
      {
        code: "1565034",
        name: "PRAKTIKUM PEMROGRAMAN BERORIENTASI OBYEK",
        sks: 1,
        grade: "A",
        mark: 4,
      },
      {
        code: "20000011A07",
        name: "BAHASA ARAB IV",
        sks: 2,
        grade: "B+",
        mark: 7,
      },
      {
        code: "20000011A11",
        name: "SEJARAH PERADABAN ISLAM",
        sks: 2,
        grade: "A",
        mark: 8,
      },
      {
        code: "20000011A12",
        name: "TEOSOFI",
        sks: 2,
        grade: "A",
        mark: 8,
      },
      {
        code: "20060511C02",
        name: "LINEAR ALGEBRA",
        sks: 3,
        grade: "A",
        mark: 12,
      },
      {
        code: "20060511C03",
        name: "STATISTICS",
        sks: 3,
        grade: "A",
        mark: 12,
      },
      {
        code: "22000011A02",
        name: "KEWARGANEGARAAN",
        sks: 2,
        grade: "A",
        mark: 8,
      },
      {
        code: "22000011B03",
        name: "BAHASA ARAB III",
        sks: 2,
        grade: "B+",
        mark: 7,
      },
    ],
  },
  {
    semester: 3,
    subjects: [
      {
        code: "1565006",
        name: "STRUKTUR DATA",
        sks: 3,
        grade: "B+",
        mark: 10.5,
      },
      {
        code: "1565011",
        name: "BASIS DATA",
        sks: 3,
        grade: "B+",
        mark: 10.5,
      },
      {
        code: "1565012",
        name: "SISTEM KOMPUTER",
        sks: 3,
        grade: "A",
        mark: 12,
      },
      {
        code: "1565032",
        name: "PRAKTIKUM STRUKTUR DATA",
        sks: 1,
        grade: "A",
        mark: 4,
      },
      {
        code: "1565036",
        name: "PRAKTIKUM BASIS DATA",
        sks: 1,
        grade: "A",
        mark: 4,
      },
      {
        code: "1565037",
        name: "PRAKTIKUM SISTEM KOMPUTER",
        sks: 1,
        grade: "A",
        mark: 4,
      },
      {
        code: "20060511C04",
        name: "NUMERICAL METHODS",
        sks: 3,
        grade: "A",
        mark: 12,
      },
      {
        code: "22000011B05",
        name: "BAHASA INGGRIS I",
        sks: 3,
        grade: "A",
        mark: 12,
      },
      {
        code: "22000011B10",
        name: "STUDI AL-QUR'AN DAN AL-HADITS",
        sks: 2,
        grade: "B+",
        mark: 7,
      },
      {
        code: "22000011B11",
        name: "STUDI FIQIH",
        sks: 2,
        grade: "A",
        mark: 8,
      },
    ],
  },
];
