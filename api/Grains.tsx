interface GrainModel {
  title: string;
  descriptions?: string;
  img?: string;
  id: number
}
const grains:GrainModel[] = [
  {
    title: "Томат",
    descriptions: "красный овощ",
    id: 0,
  },
  {
    title: "Огурец",
    descriptions: "зеленый  овощ",
    id: 1
  },
  {
    title: "Капуста",
    descriptions: "часто употребляется в салатах",
    id: 2
  },
  {
    title: "Майонез",
    descriptions: "часто употребляется в салатах",
    id: 3
  },
  {
    title: "Редис",
    descriptions: "горький овощ",
    id: 4
  },
  {
    title: "Фета",
    descriptions: "часто употребляется в салатах",
    id: 5
  },
];

export default grains;