import { FC } from "react";
import { AppContainer } from "./app-container";
import { TypographyH3, TypographyH4, TypographyP } from "../ui/typographies";
import Link from "next/link";
import { Spacer } from "./spacer";
import { FooterForm } from "./footer-form";
import {
  Facebook,
  Instagram,
  LucideIcon,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Button } from "../ui/button";
import * as motion from "motion/react-client";

enum FooterLinkGroup {
  CLIENT_CARE = "Client Care",
  OUR_COMPANY = "Our Company",
  RELATED_SITES = "Related Sites",
}
interface FooterLink {
  link: string;
  text: string;
  group: FooterLinkGroup;
}
const footerLinks: FooterLink[] = [
  {
    text: "Contact Us",
    link: "/contact-us",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Track Your Order",
    link: "/track-your-order",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Product Care & Repair",
    link: "/product-care-&-repair",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Book an Appointment",
    link: "/book-an-appointment",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Frequently Asked Questions",
    link: "/frequently-asked-questions",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Shipping & Returns",
    link: "/shipping-&-returns",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "DYZ Select Financing",
    link: "/DYZ-select-financing",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Gift Cards",
    link: "/gift-cards",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "Website Accessibility",
    link: "/website-accessibility",
    group: FooterLinkGroup.CLIENT_CARE,
  },
  {
    text: "World of DYZ",
    link: "/world-of-DYZ",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "Sustainability",
    link: "/sustainability",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "California Supply Chains Act",
    link: "/california-supply-chains-act",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "Zürich - Switzerland Privacy",
    link: "/zürich-switzerland-privacy",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "DYZ Careers",
    link: "/DYZ-careers",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "Privacy and Other Website Policies",
    link: "/privacy-and-other-website-policies",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "Transparency in Coverage",
    link: "/transparency-in-coverage",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "Do Not Sell or Share My Personal Information",
    link: "/do-not-sell-or-share-my-personal-information",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "Opt-Out of Targeted Advertising",
    link: "/opt-out-of-targeted-advertising",
    group: FooterLinkGroup.OUR_COMPANY,
  },
  {
    text: "Wedding & Gift Registry",
    link: "/wedding-&-gift-registry",
    group: FooterLinkGroup.RELATED_SITES,
  },
  {
    text: "Business Accounts",
    link: "/business-accounts",
    group: FooterLinkGroup.RELATED_SITES,
  },
  {
    text: "DYZ for the Press",
    link: "/DYZ-for-the-press",
    group: FooterLinkGroup.RELATED_SITES,
  },
  {
    text: "The Deluxe Yachting Zurich Foundation",
    link: "/the-deluxe-yachting-zurich-foundation",
    group: FooterLinkGroup.RELATED_SITES,
  },
  {
    text: "Deluxe Yachting Zurich Alertline",
    link: "/DYZ-alertline",
    group: FooterLinkGroup.RELATED_SITES,
  },
  {
    text: "Site Index",
    link: "/site-index",
    group: FooterLinkGroup.RELATED_SITES,
  },
];

interface SocialNetwork {
  icon: LucideIcon;
  href: string;
}

const socialNetworks: SocialNetwork[] = [
  { icon: Phone, href: "tel:+41795024040" },
  { icon: MessageCircle, href: "https://web.whatsapp.com/send?phone=+41795024040" },
  { icon: Mail, href: "mailto:info@wp.cruises" },
  { icon: Facebook, href: "https://facebook.com/wp.cruises" },
  { icon: Instagram, href: "https://instagram.com/white.pearl.cruises" },
];

export const Footer: FC = () => {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  return (
    <section>
      <Button
        variant={"secondary"}
        className="w-full border-primary font-light"
        asChild
      >
        <Link href={"/"}>HOME</Link>
      </Button>
      <AppContainer className="max-w-full px-8 sm:px-4 lg:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center">
          <motion.div initial="hidden" whileInView="visible" variants={list}>
            <TypographyH3 className="my-4">
              {FooterLinkGroup.CLIENT_CARE}
            </TypographyH3>
            <motion.div className="flex flex-col gap-2" variants={item}>
              {footerLinks
                .filter((link) => link.group === FooterLinkGroup.CLIENT_CARE)
                .map((element, i) => (
                  <Link
                    key={i}
                    href={element.link}
                    className="hover:underline inline-block text-xs capitalize leading-5"
                  >
                    {element.text}
                  </Link>
                ))}
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={list}>
            <TypographyH3 className="my-4">
              {FooterLinkGroup.OUR_COMPANY}
            </TypographyH3>
            <motion.div className="flex flex-col gap-2" variants={item}>
              {footerLinks
                .filter((link) => link.group === FooterLinkGroup.OUR_COMPANY)
                .map((element, i) => (
                  <Link
                    key={i}
                    href={element.link}
                    className="hover:underline inline-block text-xs capitalize leading-5"
                  >
                    {element.text}
                  </Link>
                ))}
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={list}>
            <TypographyH3 className="my-4">
              {FooterLinkGroup.RELATED_SITES}
            </TypographyH3>
            <motion.div className="flex flex-col gap-2" variants={item}>
              {footerLinks
                .filter((link) => link.group === FooterLinkGroup.RELATED_SITES)
                .map((element, i) => (
                  <Link
                    key={i}
                    href={element.link}
                    className="hover:underline inline-block text-xs capitalize leading-5"
                  >
                    {element.text}
                  </Link>
                ))}
            </motion.div>
          </motion.div>
          <div className="hidden lg:block"></div>
          <motion.div initial="hidden" whileInView="visible" variants={list}>
            <TypographyH3 className="my-4">
              Latest from Deluxe Yachting Zurich
            </TypographyH3>
            <TypographyP>
              Be the first to know about new classic yachts, special events,
              yacht openings and more.
            </TypographyP>
            <Spacer extraSmall />
            <FooterForm />
            <Spacer extraSmall />
            <motion.div className="space-x-3 space-y-3" variants={item}>
              {socialNetworks &&
                socialNetworks &&
                socialNetworks.map((socialNetwork, i) => (
                  <Button key={i} variant={"secondary"} size={"icon"} asChild>
                    <Link href={socialNetwork.href}>
                      <socialNetwork.icon className="inline-block w-6 h-6" />
                    </Link>
                  </Button>
                ))}
            </motion.div>
          </motion.div>
        </div>
      </AppContainer>
      <Spacer extraSmall />
      <div className="text-center mt-10 lg:mt-0">
        <TypographyH4>© White Pearl Cruises GmbH - 2017-2025</TypographyH4>
      </div>
      <Spacer extraSmall />
    </section>
  );
};
