"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="large"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Shop",
          id: "#products",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Sportify"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Sportify"
      description="Gear up for greatness with the latest in professional sports equipment and athletic apparel."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ug3vif"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Mission"
      title="Empowering Every Athlete"
      description="At Sportify, we bridge the gap between amateur passion and professional performance. We curate the best gear to help you crush your limits."
      subdescription="Every product in our shop is tested by pros, ensuring quality and durability."
      icon={Zap}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=91hh17"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Pro Running Shoes",
          price: "$129.99",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=pkfbtt",
        },
        {
          id: "p2",
          name: "Yoga Essentials",
          price: "$45.00",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3v2nf9",
        },
        {
          id: "p3",
          name: "Training Weights",
          price: "$89.99",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ypornk",
        },
        {
          id: "p4",
          name: "Pro Basketball",
          price: "$34.99",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=rj9r2m",
        },
        {
          id: "p5",
          name: "Soccer Kit",
          price: "$59.99",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=dm3gmz",
        },
        {
          id: "p6",
          name: "Tennis Racket",
          price: "$149.99",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=88v8ij",
        },
      ]}
      title="Latest Gear"
      description="Browse our curated collection of high-performance equipment."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Expert Vetting",
          description: "Every item is hand-picked by professional coaches.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ug3vif",
          imageAlt: "professional athlete sprinting track",
        },
        {
          title: "Fast Shipping",
          description: "Get your gear to the field in record time.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=91hh17",
          imageAlt: "professional athlete sprinting track",
        },
        {
          title: "24/7 Support",
          description: "Our team is here to help you train better.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=pkfbtt",
          imageAlt: "professional athlete sprinting track",
        },
      ]}
      title="Why Sportify?"
      description="We offer more than just gear; we offer a path to peak performance."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "10k+",
          description: "Athletes Served",
        },
        {
          id: "m2",
          value: "50+",
          description: "Pro Brands",
        },
        {
          id: "m3",
          value: "99%",
          description: "Satisfaction Rate",
        },
      ]}
      title="Our Impact"
      description="The numbers behind our passion for sports."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Alex R.",
          handle: "@alex_runs",
          testimonial: "Best gear I've ever used. Really helped my game.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h2ux3w",
        },
        {
          id: "t2",
          name: "Sarah J.",
          handle: "@sarah_fit",
          testimonial: "Quality is unmatched. Highly recommended.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ew0wys",
        },
        {
          id: "t3",
          name: "Mike T.",
          handle: "@mike_training",
          testimonial: "Shipping was fast and the quality is amazing.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=o12smg",
        },
        {
          id: "t4",
          name: "Lisa B.",
          handle: "@lisa_yoga",
          testimonial: "Great customer service and fantastic products.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=28yzss",
        },
        {
          id: "t5",
          name: "Tom D.",
          handle: "@tom_pro",
          testimonial: "I never look anywhere else for my gym gear.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fc3mrx",
        },
      ]}
      title="Athletes Trust Us"
      description="See why top competitors choose Sportify."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you offer returns?",
          content: "Yes, we offer a 30-day return policy on all non-used items.",
        },
        {
          id: "f2",
          title: "Do you ship internationally?",
          content: "Currently, we ship to all North American countries.",
        },
        {
          id: "f3",
          title: "Can I track my order?",
          content: "Yes, we send tracking information as soon as your gear ships.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Get In Touch"
      title="Ready to perform?"
      description="Have questions about our gear? Drop us a line."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All Products",
              href: "#products",
            },
            {
              label: "New Arrivals",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Returns",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Sportify Inc."
      bottomRightText="Privacy Policy"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
