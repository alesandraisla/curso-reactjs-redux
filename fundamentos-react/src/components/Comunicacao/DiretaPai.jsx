import { DiretaFilho } from "./DiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <DiretaFilho nome="Lara" idade={25} nerd={true} />
      <DiretaFilho nome="Tidus" idade={30} nerd={false} />
    </div>
  );
};
