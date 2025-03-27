"use client";
import Image from "next/image";
import {
  ChurchIcon as Mosque,
  Book,
  GraduationCap,
  Phone,
  Mail,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RegistrationForm from "@/components/registration-form";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import { useRef } from "react";

export default function Home() {
  const registrationRef = useRef<HTMLDivElement>(null);
  const scrollToRegistration = () => {
    registrationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#004d40] text-white">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn the Qur&rsquo;an with Expert Guidance
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Comprehensive Islamic education with 15 years of teaching
              experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToRegistration}
                className="bg-white text-[#004d40] hover:bg-white/90"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/ayatul-qursi.jpeg"
                alt="Qur'an Teacher"
                width={400}
                height={400}
                className="rounded-full mx-auto shadow-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#004d40]">
                Meet Your Teacher
              </h2>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 mr-2 text-[#004d40]" />
                <p className="text-lg">Qur&rsquo;an teacher for 15 years</p>
              </div>
              <p className="text-gray-700 mb-6">
                With a deep understanding of Islamic teachings and a passion for
                education, our experienced teacher provides a structured and
                comprehensive approach to learning the Qur&rsquo;an and Islamic
                principles.
              </p>
              <p className="text-gray-700 mb-6">
                Students follow a carefully designed syllabus that covers
                everything from basic knowledge of Islam to detailed stories of
                the prophets, ensuring a well-rounded Islamic education.
              </p>
              <p className="italic text-gray-600">Jazakallah Khayr</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#004d40]">
              Our Comprehensive Curriculum
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Students follow a structured syllabus which includes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Qur'an Reading",
                desc: "Learn how to read the Qur'an with proper tajweed",
              },
              { title: "Memorization", desc: "Memorise surahs and juz amma" },
              {
                title: "Prayer",
                desc: "How to perform five daily prayers",
                icon: Mosque,
              },
              {
                title: "Names of Allah",
                desc: "Learn the 99 names of Allah swt",
              },
              {
                title: "Islamic Knowledge",
                desc: "Various iskar and hadith, Six kalmas ayatul kursi",
              },
              {
                title: "Prophets' Stories",
                desc: "Complete stories of prophet Isa (AS) and all other prophets",
                icon: Users,
              },
              {
                title: "Six Kalmas",
                desc: "Six kalmas ayatul kursi",
                icon: Users,
              },
              {
                title: "Azan and Iqama",
                desc: "Learn the call to prayer and its establishment",
                icon: Users,
              },
              {
                title: "Islamic Months",
                desc: "Understanding the Islamic calendar",
                icon: Users,
              },
              {
                title: "Angels",
                desc: "Learn about angels in Islam",
                icon: Users,
              },
              {
                title: "Names of Prophets",
                desc: "Names of all prophets mentioned in the Qur'an",
                icon: Users,
              },
            ].map((item, idx) => {
              const Icon = item.icon || Book;
              return (
                <Card
                  key={idx}
                  className="bg-[#1c1c1c] text-white shadow-lg rounded-xl transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <Icon className="h-6 w-6 mr-2 text-[#4caf50] mt-1" />
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Registration Section */}
      <section
        ref={registrationRef}
        id="registration"
        className="py-16 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#004d40]">
                Register for Classes
              </h2>
              <p className="text-xl text-gray-700">
                Join our classes and begin your journey of Islamic learning
              </p>
            </div>

            <RegistrationForm />

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-2">
                For more information please call:
              </p>
              <p className="text-2xl font-bold text-[#004d40] mb-4">
                Syed at 613-823-8786
              </p>
              <p className="italic text-gray-600">Jazakallah Khayr</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-[#004d40] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Qur&rsquo;an Classes</h3>
              <p className="mb-4">
                Providing quality Islamic education for students of all ages.
              </p>
              <p>Jazakallah Khayr</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 mr-2" />
                <p>613-823-8786</p>
              </div>
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 mr-2" />
                <p>info@quranclasses.com</p>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <p>Mon-Fri: 9am-7pm</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Curriculum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Register
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://saleh-software.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 decoration-white hover:text-gray-200 font-semibold"
              >
                Saleh Groups
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
