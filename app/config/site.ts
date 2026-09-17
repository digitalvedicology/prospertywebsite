import { SiteConfig } from '@/app/lib/types'

export const siteConfig: SiteConfig = {
  name: 'Prosperty Real Estate',
  tagline: 'Real Estate Advisors, Consultants & Portfolio Managers',
  url: 'https://www.prospertyrealestate.com',
  address: 'AP 676, H Block, 15th Street, Annanagar, Chennai, Tamil Nadu, India',
  phone: ['+91 9500013446', '+91 9840027586'], // TODO: confirm secondary number
  email: 'crm@prospertyrealestate.com',
  offices: [
    {
      name: 'Chennai (India)',
      location: 'Annanagar',
      address: 'AP 676, H Block, 15th Street, Annanagar, Chennai, Tamil Nadu, India',
    },
    {
      name: 'Dubai (UAE)',
      location: 'Dubai Marina',
      address: 'Level 21, Al Habtoor Business Towers, Dubai Marina, UAE',
    },
    {
      name: 'Singapore',
      location: 'Singapore',
      address: 'Level 30, Six Battery Road, Singapore 049909',
    },
  ],
  social: {
    instagram: undefined, // TODO: add social links
    facebook: undefined,
    linkedin: undefined,
  },
}

export const externalLinks = {
  relatedWebsites: [
    {
      name: 'Praveen Saanker (AE)',
      url: 'https://praveensaanker.ae',
      description: 'Personal advisory services',
    },
    {
      name: 'Praveen Saanker',
      url: 'https://praveensaanker.com',
      description: 'Professional consulting',
    },
    {
      name: 'Vedicology India',
      url: 'https://vedicologyindia.com',
      description: 'Vedic sciences and services',
    },
    {
      name: 'Paranormal Musings',
      url: 'https://paranormalmusings.com',
      description: 'Paranormal research and insights',
    },
    {
      name: 'Vedicology',
      url: 'https://vedicology.com',
      description: 'Vedicology research platform',
    },
  ],
}
