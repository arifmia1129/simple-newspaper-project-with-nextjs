import Image from "next/image";
import notFoundImg from "../assets/images/404-error.svg";

export default function NotFound() {
  return (
    <div>
      <Image
        src={notFoundImg}
        alt="not found"
        height={500}
        width={500}
        layout="responsive"
      />
    </div>
  );
}
