import Image from "next/image";
import { Card } from "ui";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card title={""} href={""}>thanh</Card>
      <FontAwesomeIcon icon={faHouse} />
    </main>
  );
}
