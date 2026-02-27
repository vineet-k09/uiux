import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { LucideAArrowDown } from "lucide-react";

export default function Home() {
  return (
  <div>
    <Button>apply</Button>
    <motion.div 
    initial = {{opacity: 0}}
    animate = {{opacity: 1}}
    >Hello
    </motion.div>

    <Card>hea</Card>
    <LucideAArrowDown></LucideAArrowDown>
    <Dialog>jeje</Dialog>
  </div>
  );
}
