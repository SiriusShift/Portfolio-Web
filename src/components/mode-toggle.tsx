import { Moon, Sun } from "lucide-react";
import { useTheme, type Theme } from "@/components/theme-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import useScreenWidth from "@/hooks/useScreenWidth";

export function ModeToggle({ className }: { className?: string }) {
  const width = useScreenWidth();
  const { setTheme, theme } = useTheme();

  return     <Tabs
      value={theme}
      onValueChange={(value: string) => setTheme(value as Theme)}
      className={className}
    >
      <TabsList>
        <TabsTrigger value="light">
          <Sun />
        </TabsTrigger>
        <TabsTrigger value="dark">
          <Moon />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
//   width > 639 ? (

//   ) : (
//     <Button
//       onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
//         if (event.currentTarget.value === "light") {
//           setTheme("dark");
//         } else {
//           setTheme("light");
//         }
//       }}
//       value={theme}
//       variant="outline"
//       size="icon"
//       className={className}
//     >
//       <Sun className="h-3 w-3 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
//       <Moon className="absolute h-3 w-3 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   );
}
