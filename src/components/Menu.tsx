import { role } from "@/lib/data";
import Link from "next/link";
import {
  House,
  User,
  Users,
  Book,
  FileText,
  Calendar,
  Bell,
  Settings,
  LogOut,
  Clipboard,
  CheckSquare,
} from "lucide-react";

const menuItems = [
  {
    title: "MENU",
    items: [
      { 
        icon: House, 
        label: "Home", 
        href: "/", 
        visible: ["admin", "teacher", "student", "parent"] 
      },
      { 
        icon: User, 
        label: "Teachers", 
        href: "/list/teachers", 
        visible: ["admin", "teacher"] 
      },
      { 
        icon: Users, 
        label: "Students", 
        href: "/list/students", 
        visible: ["admin", "teacher"] 
      },
      { 
        icon: Users, 
        label: "Parents", 
        href: "/list/parents", 
        visible: ["admin", "teacher"] 
      },
      { 
        icon: Book, 
        label: "Subjects", 
        href: "/list/subjects", 
        visible: ["admin"] 
      },
      { 
        icon: FileText, 
        label: "Classes", 
        href: "/list/classes", 
        visible: ["admin", "teacher"] 
      },
      { 
        icon: Clipboard, 
        label: "Lessons", 
        href: "/list/lessons", 
        visible: ["admin", "teacher"] 
      },
      { 
        icon: CheckSquare, 
        label: "Exams", 
        href: "/list/exams", 
        visible: ["admin", "teacher", "student", "parent"] 
      },
      { 
        icon: FileText, 
        label: "Assignments", 
        href: "/list/assignments", 
        visible: ["admin", "teacher", "student", "parent"] 
      },
      { 
        icon: CheckSquare, 
        label: "Results", 
        href: "/list/results", 
        visible: ["admin", "teacher", "student", "parent"] 
      },
      { 
        icon: Calendar, 
        label: "Attendance", 
        href: "/list/attendance", 
        visible: ["admin", "teacher", "student", "parent"] 
      },
      { 
        icon: Calendar, 
        label: "Events", 
        href: "/list/events", 
        visible: ["admin", "teacher", "student", "parent"] 
      },
      { 
        icon: Bell, 
        label: "Messages", 
        href: "/list/messages", 
        visible: ["admin", "teacher", "student", "parent"] 
      },
      { 
        icon: Bell, 
        label: "Announcements", 
        href: "/list/announcements", 
        visible: ["admin", "teacher", "student", "parent"] 
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      { 
        icon: User, 
        label: "Profile", 
        href: "/profile", 
        visible: ["admin", "teacher", "student", "parent"] 
      },
      { 
        icon: Settings, 
        label: "Settings", 
        href: "/settings", 
        visible: ["admin", "teacher", "student", "parent"] 
      },
      { 
        icon: LogOut, 
        label: "Logout", 
        href: "/logout", 
        visible: ["admin", "teacher", "student", "parent"] 
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-zinc-400 font-light my-4">{i.title}</span>
          {i.items.map((item) => {
            if (!item.visible.includes(role)) return null;
            const Icon = item.icon; // récupère le composant
            return (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 text-zinc-500 py-1.5 md:px-2 rounded-md hover:bg-buildermaniaSky"
              >
                <Icon className="w-5 h-5 text-zinc-500" /> {/* 👈 icône Lucide */}
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;