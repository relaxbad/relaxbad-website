import Image from "next/image";
import BLOB_GREEN from "@/assets/images/blob-green.png";
import BLOB_BLUE from "@/assets/images/blob-blue.png";

interface BlobProps extends React.HTMLProps<HTMLImageElement> {
  color?: "green" | "blue";
}

const Blob = (props: BlobProps) => (
  <Image
    src={(props.color ?? "green") === "green" ? BLOB_GREEN : BLOB_BLUE}
    alt="blob"
    className={`absolute ${props.className} -z-20 w-100 hidden lg:block`}
  />
);

export default Blob;
