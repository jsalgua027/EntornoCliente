const PISOS = [
  {
    METROS: "148",
    HABITACIONES: "3",
    BANIOS: "2",
   VISTASMAR: "1",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "2009",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "445",
    HABITACIONES: "5",
    BANIOS: "3",
    VISTASMAR: "1",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "1987",
    ESTADO: "5",
    PISCINA: "1",
  },
  {
    METROS: "78",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "2007",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "70",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "1",
    TRASTERO: "0",
    ANIO: "1990",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "90",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "2019",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "144",
    HABITACIONES: "4",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "1988",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "77",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "0",
    TRASTERO: "1",
    ANIO: "2009",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "250",
    HABITACIONES: "3",
    BANIOS: "3",
    VISTASMAR: "1",
    GARAJE: "0",
    TRASTERO: "1",
    ANIO: "2000",
    ESTADO: "5",
    PISCINA: "1",
  },
  {
    METROS: "117",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "0",
    ANIO: "2019",
    ESTADO: "5",
    PISCINA: "1",
  },
  {
    METROS: "220",
    HABITACIONES: "3",
    BANIOS: "3",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "1990",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "95",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "2019",
    ESTADO: "4",
    PISCINA: "0",
  },
  {
    METROS: "138",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "2004",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "105",
    HABITACIONES: "3",
    BANIOS: "1",
    VISTASMAR: "0",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "2003",
    ESTADO: "3",
    PISCINA: "0",
  },
  {
    METROS: "56",
    HABITACIONES: "1",
    BANIOS: "1",
    VISTASMAR: "1",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "1999",
    ESTADO: "4",
    PISCINA: "0",
  },
  {
    METROS: "104",
    HABITACIONES: "3",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "1986",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "90",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "2003",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "95",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "1",
    TRASTERO: "0",
    ANIO: "2023",
    ESTADO: "5",
    PISCINA: "1",
  },
  {
    METROS: "250",
    HABITACIONES: "4",
    BANIOS: "3",
    VISTASMAR: "1",
    GARAJE: "1",
    TRASTERO: "0",
    ANIO: "2000",
    ESTADO: "3",
    PISCINA: "0",
  },
  {
    METROS: "46",
    HABITACIONES: "1",
    BANIOS: "1",
    VISTASMAR: "0",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "2005",
    ESTADO: "2",
    PISCINA: "0",
  },
  {
    METROS: "163",
    HABITACIONES: "3",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "2008",
    ESTADO: "2",
    PISCINA: "1",
  },
  {
    METROS: "81",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "1990",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "120",
    HABITACIONES: "4",
    BANIOS: "3",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "1967",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "119",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "1",
    TRASTERO: "0",
    ANIO: "2020",
    ESTADO: "5",
    PISCINA: "0",
  },
  {
    METROS: "119",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "2015",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "90",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "2016",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "130",
    HABITACIONES: "3",
    BANIOS: "1",
    VISTASMAR: "0",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "2010",
    ESTADO: "3",
    PISCINA: "0",
  },
  {
    METROS: "206",
    HABITACIONES: "3",
    BANIOS: "3",
    VISTASMAR: "1",
    GARAJE: "1",
    TRASTERO: "0",
    ANIO: "2002",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "190",
    HABITACIONES: "4",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "2005",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "192",
    HABITACIONES: "4",
    BANIOS: "3",
    VISTASMAR: "0",
    GARAJE: "0",
    TRASTERO: "1",
    ANIO: "2002",
    ESTADO: "2",
    PISCINA: "0",
  },
  {
    METROS: "250",
    HABITACIONES: "4",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "2002",
    ESTADO: "3",
    PISCINA: "0",
  },
  {
    METROS: "253",
    HABITACIONES: "3",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "0",
    ANIO: "2007",
    ESTADO: "3",
    PISCINA: "0",
  },
  {
    METROS: "85",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "0",
    ANIO: "2021",
    ESTADO: "5",
    PISCINA: "1",
  },
  {
    METROS: "124",
    HABITACIONES: "3",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "1999",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "150",
    HABITACIONES: "3",
    BANIOS: "3",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "0",
    ANIO: "2001",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "61",
    HABITACIONES: "2",
    BANIOS: "1",
    VISTASMAR: "0",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "1967",
    ESTADO: "1",
    PISCINA: "0",
  },
  {
    METROS: "272",
    HABITACIONES: "4",
    BANIOS: "4",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "0",
    ANIO: "2018",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "65",
    HABITACIONES: "2",
    BANIOS: "1",
    VISTASMAR: "0",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "2004",
    ESTADO: "4",
    PISCINA: "0",
  },
  {
    METROS: "85",
    HABITACIONES: "3",
    BANIOS: "1",
    VISTASMAR: "0",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "1970",
    ESTADO: "4",
    PISCINA: "0",
  },
  {
    METROS: "120",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "2005",
    ESTADO: "5",
    PISCINA: "1",
  },
  {
    METROS: "563",
    HABITACIONES: "6",
    BANIOS: "5",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "2000",
    ESTADO: "5",
    PISCINA: "1",
  },
  {
    METROS: "192",
    HABITACIONES: "3",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "0",
    ANIO: "2006",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "180",
    HABITACIONES: "4",
    BANIOS: "3",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "1991",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "144",
    HABITACIONES: "4",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "1990",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "263",
    HABITACIONES: "3",
    BANIOS: "3",
    VISTASMAR: "1",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "2007",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "133",
    HABITACIONES: "3",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "2005",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "93",
    HABITACIONES: "1",
    BANIOS: "1",
    VISTASMAR: "1",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "2002",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "118",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "2004",
    ESTADO: "5",
    PISCINA: "1",
  },
  {
    METROS: "469",
    HABITACIONES: "4",
    BANIOS: "6",
    VISTASMAR: "1",
    GARAJE: "1",
    TRASTERO: "0",
    ANIO: "2024",
    ESTADO: "5",
    PISCINA: "1",
  },
  {
    METROS: "73",
    HABITACIONES: "3",
    BANIOS: "1",
    VISTASMAR: "0",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "1999",
    ESTADO: "3",
    PISCINA: "0",
  },
  {
    METROS: "192",
    HABITACIONES: "3",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "1995",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "332",
    HABITACIONES: "3",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "2000",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "2200",
    HABITACIONES: "5",
    BANIOS: "4",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "1991",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "133",
    HABITACIONES: "3",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "2005",
    ESTADO: "5",
    PISCINA: "1",
  },
  {
    METROS: "152",
    HABITACIONES: "3",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "2000",
    ESTADO: "5",
    PISCINA: "1",
  },
  {
    METROS: "133",
    HABITACIONES: "3",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "0",
    TRASTERO: "1",
    ANIO: "2009",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "90",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "2019",
    ESTADO: "3",
    PISCINA: "1",
  },
  {
    METROS: "144",
    HABITACIONES: "4",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "0",
    TRASTERO: "0",
    ANIO: "1988",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "250",
    HABITACIONES: "4",
    BANIOS: "3",
    VISTASMAR: "1",
    GARAJE: "1",
    TRASTERO: "0",
    ANIO: "2000",
    ESTADO: "3",
    PISCINA: "0",
  },
  {
    METROS: "95",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "1",
    GARAJE: "1",
    TRASTERO: "0",
    ANIO: "2023",
    ESTADO: "5",
    PISCINA: "1",
  },
  {
    METROS: "77",
    HABITACIONES: "2",
    BANIOS: "2",
    VISTASMAR: "0",
    GARAJE: "0",
    TRASTERO: "1",
    ANIO: "2009",
    ESTADO: "4",
    PISCINA: "1",
  },
  {
    METROS: "209",
    HABITACIONES: "3",
    BANIOS: "3",
    VISTASMAR: "1",
    GARAJE: "1",
    TRASTERO: "1",
    ANIO: "2019",
    ESTADO: "5",
    PISCINA: "1",
  },
];
