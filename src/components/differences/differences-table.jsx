import { Icon } from "../icon";
import { Button } from "../ui/button";

export function DifferenceTable() {
  return (
    <div className="overflow-x-auto border-2 border-shade rounded-md">
      <table className="capitalize rounded-md w-full min-w-full overflow-hidden bg-background shadow-rg text-left">
        <thead>
          <tr className="border-b-2 border-shade">
            <th className="p-3 text-xl font-bold w-2/4"></th>
            <th className="p-3 text-xl font-semibold text-center w-32 bg-primary text-background">
              WALTON
            </th>
            <th className="p-3 text-xl border-r-2 font-semibold text-center w-32">
              DIY
            </th>
            <th className="p-3 text-xl font-semibold text-center w-32">
              Hire an agency
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-3 text-base w-2/4">
              Chances of launching your website
            </td>
            <td className="p-3 text-base text-center w-32 bg-primary text-background">
              100%
            </td>
            <td className="p-3 text-base border-r-2 text-center w-32">
              10-20%
            </td>
            <td className="p-3 text-base text-center w-32">100%</td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-3 text-base w-2/4">
              Done-for-you design & content
            </td>
            <td className="p-3 text-xl text-center w-32 bg-primary text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-3 text-xl border-r-2 text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
            <td className="p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-3 text-base w-2/4">
              Use any domain to get started fast
            </td>
            <td className="p-3 text-xl text-center w-32 bg-primary text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-3 text-xl border-r-2 text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-3 text-base w-2/4">Launch & training call</td>
            <td className="p-3 text-xl text-center w-32 bg-primary text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-3 text-xl border-r-2 text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
            <td className="p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-3 text-base w-2/4">
              Edit with easy-to-use website editor
            </td>
            <td className="p-3 text-xl text-center w-32 bg-primary text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-3 text-xl border-r-2 text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-3 text-base w-2/4">Custom one-on-one support</td>
            <td className="p-3 text-xl text-center w-32 bg-primary text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-3 border-r-2 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
            <td className="p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-3 text-base w-2/4">Fast, secure hosting</td>
            <td className="p-3 text-xl text-center w-32 bg-primary text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-3 border-r-2 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-3 text-base w-2/4">Launch in a week</td>
            <td className="p-3 text-xl text-center w-32 bg-primary text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-3 border-r-2 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
            <td className="p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-3 text-base w-2/4">Unlimited edits for 30 days</td>
            <td className="p-3 text-xl text-center w-32 bg-primary text-background">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="check" />
              </div>
            </td>
            <td className="p-3 border-r-2 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
            <td className="p-3 text-xl text-center w-32">
              <div className="flex items-center justify-center">
                <Icon size={24} icon="cross" />
              </div>
            </td>
          </tr>

          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-3 text-base w-2/4">Biggest frustration</td>
            <td className="p-3 text-base text-center w-32 bg-primary text-background">
              not finding us sooner
            </td>
            <td className="p-3 border-r-2 text-base text-center w-32">
              hard to use, difficult to launch a site you&apos;re happy with
            </td>
            <td className="p-3 text-base text-center w-32">
              high cost & hard to maintain once launched
            </td>
          </tr>

          {/* Final Row */}
          <tr className="border-b-2 border-shade last-of-type:border-0">
            <td className="p-3 text-xl w-2/4">
              <Button size="lg" className="bg-[#F23C04] hover:bg-[#F23C04]">
                get started
              </Button>
            </td>
            <td className="p-3 text-3xl font-semibold text-center w-32 bg-primary text-background">
              £12.99 /month
            </td>
            <td className="p-3 border-r-2 text-xl font-semibold text-destructive text-center w-32">
              £500 every year + endless time tinkering
            </td>
            <td className="p-3 text-xl font-semibold text-destructive text-center w-32">
              £1500-3000 maintenance costs
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
