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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#004d40]">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from those who have benefited from our Qur&rsquo;an classes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-4 bg-[#004d40] text-white">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <p className="text-gray-700 mb-4 italic">
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
