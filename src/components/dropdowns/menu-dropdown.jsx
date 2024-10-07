import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "../icon";

export function MenuDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="min-w-fit gap-2 bg-transparent p-2"
        >
          <Icon icon="menu" size={20} />
          <span className="hidden md:block">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem className="font-semibold">
            <span>WALTON vs others</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold">
            <span>Features</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold">
            <span>Examples</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold">
            <span>FAQs</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
