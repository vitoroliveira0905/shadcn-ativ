import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Hero7 } from "@/components/hero7";
import { Pricing4 } from "@/components/pricing4";
import { Reviews1 } from "@/components/reviews1";

export default function Home() {
  return (
    <>
      <Hero7></Hero7>
      <Pricing4></Pricing4>
      <Reviews1 className="mb-20"></Reviews1>
    </>

  );
}
