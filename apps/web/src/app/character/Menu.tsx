import { faChild, faEye, faFaceGrinWide, faHatCowboy, faShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MATERIAL_CHARACTER } from './constant';

export default function Menu({
  active,
  onClick,
}: {
  active: String,
  onClick: (string) => void
}): JSX.Element {
  const listMenu = [
    {
      icon: faChild,
      label: MATERIAL_CHARACTER.SKIN
    },
    {
      icon: faEye,
      label: MATERIAL_CHARACTER.EYES
    },
    {
      icon: faShirt,
      label: MATERIAL_CHARACTER.CLOTHE
    },
    {
      icon: faFaceGrinWide,
      label: MATERIAL_CHARACTER.MOUTH
    },
    {
      icon: faHatCowboy,
      label: MATERIAL_CHARACTER.HAT
    },
  ]

  const handleClick = (item: string) =>{
    onClick(item);
  }

  return (
    <nav className="rounded-3xl bg-neutral-800 h-96 flex-none w-56 p-6 pr-0">
      <ul>
        {
          listMenu.map((item, index)=>{
            return (
              <li 
                className={
                  `py-4 p-4 hover:bg-neutral-500 hover:rounded-tl-full hover:rounded-bl-full 
                    ${active === item.label && 'bg-black rounded-tl-full rounded-bl-full'}`
                }
                onClick={()=>handleClick(item.label)}
                key={index}>
                <FontAwesomeIcon icon={item.icon} className="mr-6 w-4" size="2xl"/>
                {item.label}
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}