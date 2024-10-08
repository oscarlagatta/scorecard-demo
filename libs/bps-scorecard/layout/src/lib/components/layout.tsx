import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Sidebar } from './index';
import { SidebarProvider } from '../context/sidebar-context';

export const Layout: FC = () => {
  return (
    <div className="w-screen  h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <SidebarProvider>
          <Sidebar />
        </SidebarProvider>
        <main className="flex-1 p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
// import React from 'react';
// import { BarChart2, Shield, Star, TrendingUp, Users } from 'lucide-react';
// import {
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger
// } from '@bofa/shadcn-ui-components';
//
// export default function LandingPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-[#F0F0F0]">
//       <header className="bg-[#3C3B6E] text-white sticky top-0 z-50 shadow-md w-full">
//         <div className="max-w-full px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between py-4">
//             <div className="flex items-center space-x-2">
//               <BarChart2 className="h-6 w-6 text-[#B31942]" />
//               <span className="font-bold text-xl">Moshe Solomon's Bank Scorecard</span>
//             </div>
//             <NavigationMenu>
//               <NavigationMenuList>
//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger
//                     className="bg-[#3C3B6E] text-white hover:bg-[#4A4980] hover:text-white focus:bg-[#4A4980] focus:text-white">Features</NavigationMenuTrigger>
//                   <NavigationMenuContent>
//                     <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                       <li className="row-span-3">
//                         <NavigationMenuLink asChild>
//                           <a
//                             className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#3C3B6E] to-[#B31942] p-6 no-underline outline-none focus:shadow-md"
//                             href="/"
//                           >
//                             <Star className="h-6 w-6 text-white" />
//                             <div className="mb-2 mt-4 text-lg font-medium text-white">
//                               Scorecard Bank
//                             </div>
//                             <p className="text-sm leading-tight text-white/90">
//                               Revolutionize your bank's decision making with data-driven insights.
//                             </p>
//                           </a>
//                         </NavigationMenuLink>
//                       </li>
//                       <li>
//                         <NavigationMenuLink asChild>
//                           <a href="/"
//                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900">
//                             <div className="text-sm font-medium leading-none">Risk Assessment</div>
//                             <p className="line-clamp-2 text-sm leading-snug text-slate-500">
//                               Evaluate creditworthiness accurately
//                             </p>
//                           </a>
//                         </NavigationMenuLink>
//                       </li>
//                       <li>
//                         <NavigationMenuLink asChild>
//                           <a href="/"
//                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900">
//                             <div className="text-sm font-medium leading-none">Decision Automation</div>
//                             <p className="line-clamp-2 text-sm leading-snug text-slate-500">
//                               Streamline approval processes
//                             </p>
//                           </a>
//                         </NavigationMenuLink>
//                       </li>
//                       <li>
//                         <NavigationMenuLink asChild>
//                           <a href="/"
//                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900">
//                             <div className="text-sm font-medium leading-none">Customer Segmentation</div>
//                             <p className="line-clamp-2 text-sm leading-snug text-slate-500">
//                               Gain deeper customer insights
//                             </p>
//                           </a>
//                         </NavigationMenuLink>
//                       </li>
//                     </ul>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger
//                     className="bg-[#3C3B6E] text-white hover:bg-[#4A4980] hover:text-white focus:bg-[#4A4980] focus:text-white">Pricing</NavigationMenuTrigger>
//                   <NavigationMenuContent>
//                     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
//                       {["Basic", "Pro", "Enterprise"].map((plan) => (
//                         <li key={plan}>
//                           <NavigationMenuLink asChild>
//                             <a href="/"
//                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900">
//                               <div className="text-sm font-medium leading-none">{plan} Plan</div>
//                               <p className="line-clamp-2 text-sm leading-snug text-slate-500">
//                                 Tailored solutions for your needs
//                               </p>
//                             </a>
//                           </NavigationMenuLink>
//                         </li>
//                       ))}
//                     </ul>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <NavigationMenuLink
//                     className="bg-[#3C3B6E] text-white hover:bg-[#4A4980] hover:text-white focus:bg-[#4A4980] focus:text-white"
//                     href="/about">
//                     <Button variant="ghost" className="text-white hover:text-white hover:bg-[#4A4980]">About</Button>
//                   </NavigationMenuLink>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <NavigationMenuLink
//                     className="bg-[#3C3B6E] text-white hover:bg-[#4A4980] hover:text-white focus:bg-[#4A4980] focus:text-white"
//                     href="/contact">
//                     <Button variant="ghost" className="text-white hover:text-white hover:bg-[#4A4980]">Contact</Button>
//                   </NavigationMenuLink>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div>
//         </div>
//       </header>
//
//       <main className="flex-grow">
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F0F0F0]">
//           <div className="max-w-full px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col items-center text-center space-y-4">
//               <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#3C3B6E]">
//                 Revolutionize Your Bank's Decision Making
//               </h1>
//               <p className="max-w-[800px] text-[#3C3B6E] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Empower your financial institution with data-driven insights for smarter, faster, and more accurate
//                 decisions.
//               </p>
//               <div className="space-x-4">
//                 <Button className="bg-[#B31942] hover:bg-[#8A1538] text-white">Get Started</Button>
//                 <Button variant="outline"
//                         className="text-[#3C3B6E] border-[#3C3B6E] hover:bg-[#3C3B6E] hover:text-white">Learn
//                   More</Button>
//               </div>
//             </div>
//           </div>
//         </section>
//
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
//           <div className="max-w-full px-4 sm:px-6 lg:px-8">
//             <h2
//               className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#3C3B6E]">
//               How Scorecard Bank Solves Your Problems
//             </h2>
//             <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
//               <Card className="border-[#3C3B6E] border-2">
//                 <CardHeader>
//                   <Shield className="h-10 w-10 mb-2 text-[#B31942]" />
//                   <CardTitle className="text-[#3C3B6E]">Risk Assessment</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   Accurately evaluate customer creditworthiness and loan applications using our advanced scoring
//                   algorithms.
//                 </CardContent>
//               </Card>
//               <Card className="border-[#3C3B6E] border-2">
//                 <CardHeader>
//                   <TrendingUp className="h-10 w-10 mb-2 text-[#B31942]" />
//                   <CardTitle className="text-[#3C3B6E]">Decision Automation</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   Streamline your approval processes with automated decision-making based on customizable scorecards.
//                 </CardContent>
//               </Card>
//               <Card className="border-[#3C3B6E] border-2">
//                 <CardHeader>
//                   <Users className="h-10 w-10 mb-2 text-[#B31942]" />
//                   <CardTitle className="text-[#3C3B6E]">Customer Segmentation</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   Gain deeper insights into your customer base by segmenting them based on various criteria.
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-[#3C3B6E] text-white">
//           <div className="max-w-full px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
//               Benefits of Scorecard Bank
//             </h2>
//             <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
//               <Card className="bg-white/10 backdrop-blur-lg border-white/20">
//                 <CardHeader>
//                   <CardTitle className="text-white">Data-Driven Decisions</CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-white/80">
//                   Make informed choices based on comprehensive data analysis and predictive modeling.
//                 </CardContent>
//               </Card>
//               <Card className="bg-white/10 backdrop-blur-lg border-white/20">
//                 <CardHeader>
//                   <CardTitle className="text-white">Increased Efficiency</CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-white/80">
//                   Automate routine decisions, freeing up your team to focus on complex cases and strategic initiatives.
//                 </CardContent>
//               </Card>
//               <Card className="bg-white/10 backdrop-blur-lg border-white/20">
//                 <CardHeader>
//                   <CardTitle className="text-white">Improved Risk Management</CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-white/80">
//                   Minimize potential losses by accurately assessing and pricing risk across your portfolio.
//                 </CardContent>
//               </Card>
//               <Card className="bg-white/10 backdrop-blur-lg border-white/20">
//                 <CardHeader>
//                   <CardTitle className="text-white">Enhanced Customer Experience</CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-white/80">
//                   Deliver faster decisions and personalized offerings, improving customer satisfaction and loyalty.
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F0F0F0]">
//           <div className="max-w-full px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col items-center text-center space-y-4">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#3C3B6E]">
//                 Ready to Transform Your Bank's Decision-Making?
//               </h2>
//               <p className="max-w-[800px] text-[#3C3B6E] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Join the growing number of financial institutions leveraging Scorecard Bank to drive growth and manage
//                 risk.
//               </p>
//               <div className="space-x-4">
//                 <Button className="bg-[#B31942] hover:bg-[#8A1538] text-white">Schedule a Demo</Button>
//                 <Button variant="outline"
//                         className="text-[#3C3B6E] border-[#3C3B6E] hover:bg-[#3C3B6E] hover:text-white">Contact
//                   Sales</Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//
//       <footer className="w-full bg-[#3C3B6E] text-white py-6 md:py-0">
//         <div className="max-w-full px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
//             <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
//               <BarChart2 className="h-6 w-6 text-[#B31942]" />
//               <p className="text-center text-sm leading-loose md:text-left">
//                 © 2024 Scorecard Bank. All rights reserved.
//               </p>
//             </div>
//             <div className="flex gap-4">
//               <Button variant="ghost" size="sm" className="text-white hover:text-[#B31942]">Terms of Service</Button>
//               <Button variant="ghost" size="sm" className="text-white hover:text-[#B31942]">Privacy Policy</Button>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
