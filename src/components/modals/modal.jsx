import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function Modal({ children, isOpen, onClose, className }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={cn(className)}>{children}</DialogContent>
    </Dialog>
  );
}
