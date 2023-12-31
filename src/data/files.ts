const files = [
  {
    id: "1",
    name: "Hankedokumendid-5",
    type: "FOLDER",
    created: "2022-02-01 00:00:49.231+02",
    createdBy: "Anne Salat",
  },
  {
    id: "2",
    name: "Allkirjastamiseks-1.asice",
    type: "CONTAINER",
    created: "2022-02-03 00:00:49.231+02",
    createdBy: "Anne Salat",
    status: "SIGNING",
    totalSigners: "3",
    signedBy: "2",
    version: "1",
  },
  {
    id: "3",
    name: "Kontrollakt.pdf",
    type: "FILE",
    created: "2022-02-05 00:00:49.231+02",
    createdBy: "Projektijuht Mihkel-Oliver",
    version: "3",
  },
  {
    id: "4",
    name: "Allkirjastamiseks-3.asice",
    type: "CONTAINER",
    created: "2022-02-04 00:00:49.231+02",
    createdBy: "Anne Salat",
    status: "DECLINED",
    totalSigners: "4",
    signedBy: "1",
    version: "1",
  },
  {
    id: "5",
    name: "Hankedokumendid-6",
    type: "FOLDER",
    created: "2022-02-02 00:00:49.231+02",
    createdBy: "Anne Salat",
  },
];

const filesData = JSON.stringify(files, null, 2);

export { filesData };
