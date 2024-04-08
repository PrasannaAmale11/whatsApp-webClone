"use client";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { SunMoon } from "lucide-react";


const ThemeSwitch = () => {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className='bg-transparent relative'>
				<Button variant='outline' size='icon'>
					<SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<SunMoon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:-rotate-90 dark:scale-0' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='bg-gray-primary '>
				<DropdownMenuItem onClick={() => setTheme("light")}  className="cursor-pointer"><SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 mr-2 scale-100 transition-all dark:-rotate-90 dark:scale-1' /> Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}  className="cursor-pointer"> <MoonIcon className='h-[1.2rem] w-[1.2rem] mr-2 rotate-90 scale-100 transition-all dark:rotate-0 dark:scale-100 ' />Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer"> <SunMoon className='h-[1.2rem] w-[1.2rem] mr-2 rotate-90 scale-100 transition-all dark:rotate-0 dark:scale-100 ' />System</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
export default ThemeSwitch;