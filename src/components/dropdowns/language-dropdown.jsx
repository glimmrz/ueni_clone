import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "../icon";

export function LanguageDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="min-w-fit gap-2 bg-transparent p-2"
        >
          <Icon icon="planet" size={20} />
          <span className="hidden md:block">English</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Choose Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex justify-between items-center">
            <span>English</span>
            <Icon icon="usa" />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between items-center">
            <span>Spanish</span>
            <Icon icon="spain" />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between items-center">
            <span>Portugese</span>
            <Icon icon="portugal" />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between items-center">
            <span>Bengali</span>
            <Icon icon="bangladesh" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
