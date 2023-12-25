import { Magic } from "magic-sdk";

const magicApiKey = process.env.NEXT_PUBLIC_MAGIC_API_KEY;

const createMagic = () => {
  return typeof window !== "undefined" && new Magic(magicApiKey);
};

const magic = createMagic();

console.log(magic);

export { magic };
