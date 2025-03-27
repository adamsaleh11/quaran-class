import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed K.",
      avatar: "AK",
      text: "The Qur'an classes have transformed my understanding of Islam. The teacher is patient and knowledgeable, making complex concepts easy to understand.",
    },
    {
      name: "Fatima S.",
      avatar: "FS",
      text: "My children have learned so much in these classes. They can now recite surahs beautifully and understand the meaning behind them.",
    },
    {
      name: "Yusuf M.",
      avatar: "YM",
      text: "As an adult learner, I was nervous about starting my journey, but the supportive environment made it easy. I've learned more in months than I did in years on my own.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#1c1c1c] text-white shadow-lg rounded-xl"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-4 bg-[#004d40] text-white">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <p className="text-gray-300 mb-4 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="font-bold">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
