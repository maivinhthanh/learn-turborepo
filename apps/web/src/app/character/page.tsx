import Menu from "./Menu";
import { MATERIAL_CHARACTER } from './constant';

export default function Character(): JSX.Element {
  return (
    <main className="flex min-h-screen items-center p-12">
      <Menu active={MATERIAL_CHARACTER.SKIN} onClick={()=>{}}></Menu>
      <div className="flex-initial"></div>
    </main>
  );
}
