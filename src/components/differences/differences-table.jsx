import { Icon } from "../icon";
import { Button } from "../ui/button";

export function DifferenceTable() {
  return (
    <div className="overflow-hidden border-2 border-shade rounded-md text-foreground">
      <table className="capitalize rounded-md w-full min-w-full overflow-hidden bg-background shadow-rg text-left">
        <thead>
          <tr className="border-b-2 border-shade">
            <th className="p-1 md:p-3 text-base md:text-xl font-bold w-2/4"></th>
            <th className="p-1 md:p-3 text-base md:text-xl font-semibold text-center w-32 bg-foreground text-background">
              WALTON
            </th>
            <th className="p-1 md:p-3 text-base md:text-xl border-r-2 font-semibold text-center w-32">
              DIY
            </th>
            <th className="p-1 md:p-3 text-base md:text-xl font-semibold text-center w-32">
              Hire an agency
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-1 md:p-3 text-xs md:text-base ">
              Chances of launching your website
            </td>
            <td className="p-1 md:p-3 text-xs md:text-base text-center w-32 bg-foreground text-background">
              100%
            </td>
            <td className="p-1 md:p-3 text-xs md:text-base border-r-2 text-center w-32">
              10-20%
            </td>
            <td className="p-1 md:p-3 text-xs md:text-base text-center w-32">
              100%
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-1 md:p-3 text-xs md:text-base ">
              Done-for-you design & content
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32 bg-foreground text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-1 md:p-3 text-xl border-r-2 text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-1 md:p-3 text-xs md:text-base ">
              Use any domain to get started fast
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32 bg-foreground text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-1 md:p-3 text-xl border-r-2 text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-1 md:p-3 text-xs md:text-base ">
              Launch & training call
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32 bg-foreground text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-1 md:p-3 text-xl border-r-2 text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-1 md:p-3 text-xs md:text-base ">
              Edit with easy-to-use website editor
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32 bg-foreground text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-1 md:p-3 text-xl border-r-2 text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-1 md:p-3 text-xs md:text-base ">
              Custom one-on-one support
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32 bg-foreground text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-1 md:p-3 border-r-2 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-1 md:p-3 text-xs md:text-base ">
              Fast, secure hosting
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32 bg-foreground text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-1 md:p-3 border-r-2 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-1 md:p-3 text-xs md:text-base ">
              Launch in a week
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32 bg-foreground text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-1 md:p-3 border-r-2 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-1 md:p-3 text-xs md:text-base ">
              Unlimited edits for 30 days
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32 bg-foreground text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-1 md:p-3 border-r-2 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
            <td className="p-1 md:p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-1 md:p-3 text-xs md:text-base ">
              Biggest frustration
            </td>
            <td className="p-1 md:p-3 text-xs md:text-base text-center w-32 bg-foreground text-background">
              not finding us sooner
            </td>
            <td className="p-1 md:p-3 border-r-2 text-xs md:text-base text-center w-32">
              hard to use, difficult to launch a site you&apos;re happy with
            </td>
            <td className="p-1 md:p-3 text-xs md:text-base text-center w-32">
              high cost & hard to maintain once launched
            </td>
          </tr>

          {/* Final Row */}
          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-1 md:p-3 text-xl w-2/4">
              <Button className="hidden md:inline-flex">get started</Button>
            </td>
            <td className="p-1 md:p-3 text-base md:text-3xl font-semibold text-center w-32 bg-foreground text-background">
              £12.99 /month
            </td>
            <td className="p-1 md:p-3 border-r-2 text-sm md:text-xl font-semibold text-destructive text-center w-32">
              £500 every year + endless time tinkering
            </td>
            <td className="p-1 md:p-3 text-sm  md:text-xl font-semibold text-destructive text-center w-32">
              £1500-3000 maintenance costs
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
