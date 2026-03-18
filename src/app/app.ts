import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  QueryList,
  ViewChildren,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { TimelineModule } from 'primeng/timeline';

interface NavItem {
  label: string;
  href: string;
}

interface Metric {
  label: string;
  value: string;
}

interface CollectionHighlight {
  title: string;
  description: string;
  details: string;
  price: string;
}

interface PricedService {
  name: string;
  price: string;
}

interface ServiceGroup {
  label: string;
  summary: string;
  items: PricedService[];
}

interface GalleryFrame {
  eyebrow: string;
  title: string;
  caption: string;
  displayUrl: string;
  assetPath: string;
  alt: string;
  objectPosition?: string;
  href?: string;
}

interface ProcessStep {
  phase: string;
  step: string;
  title: string;
  description: string;
}

interface ExperienceNote {
  title: string;
  body: string;
  accent: string;
}

interface InstagramProfile {
  brandName: string;
  handle: string;
  fullName: string;
  biographyLines: string[];
  followersCount: number;
  followsCount: number;
  highlightsCount: number;
  postsCount: number;
  externalUrl: string;
  profileImageUrl: string;
  profileImageAssetPath: string;
}

interface InstagramPost {
  type: 'Image' | 'Sidecar' | 'Video';
  shortCode: string;
  dateLabel: string;
  location: string;
  likes: number;
  comments: number;
  views?: number;
  caption: string;
  displayUrl: string;
  assetPath: string;
  href: string;
  alt: string;
}

const INSTAGRAM_URL = 'https://www.instagram.com/jackgarcia.co/';
const LINKTREE_URL = 'https://linktr.ee/jackgarcia.co';
const NUMBER_FORMATTER = new Intl.NumberFormat('en-US');

const PROFILE: InstagramProfile = {
  brandName: 'Jack Garcia Co.',
  handle: 'jackgarcia.co',
  fullName: 'FLORIDA PHOTOGRAPHER',
  biographyLines: [
    'Natural Light | Timeless Storytelling',
    'Lifestyle | Weddings',
    'Based in Florida | Available for Travel',
    'DM to Inquire',
  ],
  followersCount: 814,
  followsCount: 676,
  highlightsCount: 10,
  postsCount: 51,
  externalUrl: LINKTREE_URL,
  profileImageUrl:
    'https://scontent-phx1-1.cdninstagram.com/v/t51.82787-19/573734543_17948446257047912_4237563899148563029_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGFZi1POz_dmgY-M3LX0xvnnRbgtdxcE0pefJe06TmI0lY21GJ9FNDvNHLRwFJAa58&_nc_ohc=YWsEt4y54_gQ7kNvwGDrzf6&_nc_gid=uUldxY7WNsNPYG6OktWN-g&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Afw3HepEAStDie6sTqXrl4HTRWR0nrMKH12CBf1irIya-w&oe=69BFCE18&_nc_sid=8b3546',
  profileImageAssetPath: '/instagram/profile-61411303911.jpg',
};

const RECENT_POSTS: InstagramPost[] = [
  {
    type: 'Video',
    shortCode: 'DV8077-jatl',
    dateLabel: 'Mar 16',
    location: 'Arizona',
    likes: 72,
    comments: 2,
    views: 1593,
    caption: '',
    displayUrl:
      'https://scontent-phx1-1.cdninstagram.com/v/t51.82787-15/645714325_17961791469047912_4621030012649385767_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGFZi1POz_dmgY-M3LX0xvnnRbgtdxcE0pefJe06TmI0lY21GJ9FNDvNHLRwFJAa58&_nc_ohc=wLr_RhT89tcQ7kNvwEA6wK4&_nc_gid=uUldxY7WNsNPYG6OktWN-g&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfyhUw9tlq829auR3-0pw5axxWrxXZ1A9-wGu3lpzmEweg&oe=69BFB453&_nc_sid=8b3546',
    assetPath: '/instagram/DV8077-jatl.jpg',
    href: 'https://www.instagram.com/p/DV8077-jatl/',
    alt: 'Recent Jack Garcia Co. reel cover posted from Arizona on March 16, 2026.',
  },
  {
    type: 'Sidecar',
    shortCode: 'DV1F6RbDXin',
    dateLabel: 'Mar 13',
    location: 'Florida',
    likes: 117,
    comments: 4,
    caption: 'Love this car couple shoot.',
    displayUrl:
      'https://scontent-phx1-1.cdninstagram.com/v/t51.82787-15/645775584_17961790593047912_6976471790705355562_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGFZi1POz_dmgY-M3LX0xvnnRbgtdxcE0pefJe06TmI0lY21GJ9FNDvNHLRwFJAa58&_nc_ohc=hzmBqqsd5VsQ7kNvwFKAK3L&_nc_gid=uUldxY7WNsNPYG6OktWN-g&edm=AOQ1c0wBAAAA&ccb=7-5&ig_cache_key=Mzg0NTE0NDI2NzQzNDM1NTc2Mg%3D%3D.3-ccb7-5&oh=00_Afwp4gpcgpnRtXo30zueRMqmIsB5-MF68HkObacgIgrE0A&oe=69BFC9C7&_nc_sid=8b3546',
    assetPath: '/instagram/DV1F6RbDXin.jpg',
    href: 'https://www.instagram.com/p/DV1F6RbDXin/',
    alt: 'Jack Garcia Co. couples session post shared from Florida on March 13, 2026.',
  },
  {
    type: 'Sidecar',
    shortCode: 'DV1Dph5jTum',
    dateLabel: 'Mar 11',
    location: 'Lake Wales, Florida',
    likes: 123,
    comments: 3,
    caption: 'Trying to manifest more shoots at Bok Tower Gardens.',
    displayUrl:
      'https://scontent-phx1-1.cdninstagram.com/v/t51.82787-15/645819718_17961789651047912_5582991189694122744_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGFZi1POz_dmgY-M3LX0xvnnRbgtdxcE0pefJe06TmI0lY21GJ9FNDvNHLRwFJAa58&_nc_ohc=oypJAANWoQIQ7kNvwHa6_a5&_nc_gid=uUldxY7WNsNPYG6OktWN-g&edm=AOQ1c0wBAAAA&ccb=7-5&ig_cache_key=Mzg0NTEzNTgyMDA3MjU1MDI3MA%3D%3D.3-ccb7-5&oh=00_Afws-8aMQSR5HmCVp6UdmTf3XECDWc7lhzN0MFtIVSivlg&oe=69BFBE5F&_nc_sid=8b3546',
    assetPath: '/instagram/DV1Dph5jTum.jpg',
    href: 'https://www.instagram.com/p/DV1Dph5jTum/',
    alt: 'Jack Garcia Co. portrait post from Lake Wales, Florida shared on March 11, 2026.',
  },
  {
    type: 'Video',
    shortCode: 'DVq9DuSDU0q',
    dateLabel: 'Mar 9',
    location: 'Florida',
    likes: 66,
    comments: 5,
    views: 308,
    caption: '',
    displayUrl:
      'https://scontent-phx1-1.cdninstagram.com/v/t51.82787-15/639862545_17961068625047912_7541171992783888713_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGFZi1POz_dmgY-M3LX0xvnnRbgtdxcE0pefJe06TmI0lY21GJ9FNDvNHLRwFJAa58&_nc_ohc=yx9ot4l54eYQ7kNvwHENqmP&_nc_gid=uUldxY7WNsNPYG6OktWN-g&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfyMz1O6PxDg1XlTe-p9gDOStG67FQAtTssOsxKTSzjtIg&oe=69BFCB30&_nc_sid=8b3546',
    assetPath: '/instagram/DVq9DuSDU0q.jpg',
    href: 'https://www.instagram.com/p/DVq9DuSDU0q/',
    alt: 'Jack Garcia Co. reel cover shared from Florida on March 9, 2026.',
  },
  {
    type: 'Video',
    shortCode: 'DVZMEnhjXtp',
    dateLabel: 'Mar 4',
    location: 'St. Petersburg, FL',
    likes: 50,
    comments: 2,
    views: 311,
    caption: '',
    displayUrl:
      'https://scontent-phx1-1.cdninstagram.com/v/t51.82787-15/641045593_17961068523047912_8316571364081537640_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGFZi1POz_dmgY-M3LX0xvnnRbgtdxcE0pefJe06TmI0lY21GJ9FNDvNHLRwFJAa58&_nc_ohc=-9Z5um5pZ7sQ7kNvwE5s5Z3&_nc_gid=uUldxY7WNsNPYG6OktWN-g&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfytX5Bgneu9yOnCjAImIsRS4hzIXgcensa0kgZX7tlk2g&oe=69BFC172&_nc_sid=8b3546',
    assetPath: '/instagram/DVZMEnhjXtp.jpg',
    href: 'https://www.instagram.com/p/DVZMEnhjXtp/',
    alt: 'Jack Garcia Co. reel cover shared from St. Petersburg, Florida on March 4, 2026.',
  },
  {
    type: 'Sidecar',
    shortCode: 'DVjTQEZABUP',
    dateLabel: 'Mar 2',
    location: 'Florida',
    likes: 112,
    comments: 1,
    caption: 'Obsessed with these. Movement shots always give what they need to give.',
    displayUrl:
      'https://scontent-phx1-1.cdninstagram.com/v/t51.82787-15/639748462_17960667078047912_6882501336475370482_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGFZi1POz_dmgY-M3LX0xvnnRbgtdxcE0pefJe06TmI0lY21GJ9FNDvNHLRwFJAa58&_nc_ohc=0Q4YmGxh4N4Q7kNvwHUgVSH&_nc_gid=uUldxY7WNsNPYG6OktWN-g&edm=AOQ1c0wBAAAA&ccb=7-5&ig_cache_key=MzgzODI5NTI0ODc1MzE0MTMwNw%3D%3D.3-ccb7-5&oh=00_AfwTfuN2kUo-MiZS6iOwlIt-cN1rBPzTFgjA1mr_WP_KCQ&oe=69BFA185&_nc_sid=8b3546',
    assetPath: '/instagram/DVjTQEZABUP.jpg',
    href: 'https://www.instagram.com/p/DVjTQEZABUP/',
    alt: 'Jack Garcia Co. motion portrait post shared from Florida on March 2, 2026.',
  },
  {
    type: 'Sidecar',
    shortCode: 'DU_gudzkt16',
    dateLabel: 'Feb 20',
    location: 'Bonnet Springs Park',
    likes: 65,
    comments: 0,
    caption:
      'Your love deserves to be documented beautifully. Engagement sessions are now open for booking.',
    displayUrl:
      'https://scontent-phx1-1.cdninstagram.com/v/t51.82787-15/630130837_17960115669047912_6671945884795074875_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGFZi1POz_dmgY-M3LX0xvnnRbgtdxcE0pefJe06TmI0lY21GJ9FNDvNHLRwFJAa58&_nc_ohc=_dwtFjpO_t8Q7kNvwG5Ofd5&_nc_gid=uUldxY7WNsNPYG6OktWN-g&edm=AOQ1c0wBAAAA&ccb=7-5&ig_cache_key=MzgzNDgyNjkzMTAwMzY0NTY2MQ%3D%3D.3-ccb7-5&oh=00_AfxW4I26KN4bn3qAa7rkHBaTBwFSQLw8B799PR6dnwnt-A&oe=69BFA647&_nc_sid=8b3546',
    assetPath: '/instagram/DU_gudzkt16.jpg',
    href: 'https://www.instagram.com/p/DU_gudzkt16/',
    alt: 'Jack Garcia Co. engagement session post shared from Bonnet Springs Park on February 20, 2026.',
  },
  {
    type: 'Sidecar',
    shortCode: 'DUomtZmkmPJ',
    dateLabel: 'Feb 11',
    location: 'Bonnet Springs Park',
    likes: 77,
    comments: 0,
    caption:
      'Baby on the way, and the glow says it all. Message me to book your maternity session.',
    displayUrl:
      'https://scontent-phx1-1.cdninstagram.com/v/t51.82787-15/626001810_17959019880047912_1279483812305296447_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGFZi1POz_dmgY-M3LX0xvnnRbgtdxcE0pefJe06TmI0lY21GJ9FNDvNHLRwFJAa58&_nc_ohc=TGGQBd6F7rEQ7kNvwEydUm3&_nc_gid=uUldxY7WNsNPYG6OktWN-g&edm=AOQ1c0wBAAAA&ccb=7-5&ig_cache_key=MzgyNzYwMDIwMTY5MjEyNTc0MA%3D%3D.3-ccb7-5&oh=00_AfyI2iKJ26tcytd7z5r9VOo5fk5BK_cmXBFUCXSUjxME0Q&oe=69BFCF70&_nc_sid=8b3546',
    assetPath: '/instagram/DUomtZmkmPJ.jpg',
    href: 'https://www.instagram.com/p/DUomtZmkmPJ/',
    alt: 'Jack Garcia Co. maternity session post shared from Bonnet Springs Park on February 11, 2026.',
  },
];

function formatCount(value: number): string {
  return NUMBER_FORMATTER.format(value);
}

function trimCopy(value: string, fallback: string, limit: number): string {
  const normalized = value.replace(/\s+/g, ' ').trim();

  if (!normalized) {
    return fallback;
  }

  if (normalized.length <= limit) {
    return normalized;
  }

  return `${normalized.slice(0, limit - 1).trimEnd()}...`;
}

function postHeadline(post: InstagramPost): string {
  const fallback =
    post.type === 'Video'
      ? `Recent reel from ${post.location}`
      : `Recent post from ${post.location}`;
  return trimCopy(post.caption, fallback, 52);
}

function postMeta(post: InstagramPost): string {
  return [
    post.location,
    `${formatCount(post.likes)} likes`,
    `${formatCount(post.comments)} comments`,
    post.views ? `${formatCount(post.views)} views` : null,
  ]
    .filter(Boolean)
    .join(' | ');
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccordionModule,
    ButtonModule,
    CarouselModule,
    FloatLabelModule,
    InputTextModule,
    TextareaModule,
    TimelineModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  @ViewChildren('revealBlock') private readonly revealBlocks?: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('portfolioItem') private readonly portfolioItems?: QueryList<
    ElementRef<HTMLElement>
  >;

  private readonly formBuilder = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);
  private readonly reducedMotionQuery =
    typeof window === 'undefined' ? null : window.matchMedia('(prefers-reduced-motion: reduce)');
  protected readonly prefersReducedMotion = signal(this.reducedMotionQuery?.matches ?? false);
  protected readonly isNavDrawerOpen = signal(false);

  protected readonly navItems: NavItem[] = [
    { label: 'Services', href: 'services' },
    { label: 'Portfolio', href: 'portfolio' },
    { label: 'Journal', href: 'journal' },
    { label: 'About', href: 'about' },
    { label: 'Process', href: 'process' },
    { label: 'Inquire', href: 'contact' },
  ];

  protected readonly instagramProfile = PROFILE;
  protected readonly heroEyebrow = PROFILE.biographyLines[0];
  protected readonly heroTitle =
    'Florida wedding and portrait photography rooted in natural light and timeless storytelling.';
  protected readonly heroSummary =
      'Jack Garcia Co. creates warm, story-driven imagery for weddings, couples, maternity, family, branding, and milestone sessions across Florida and beyond.';
  protected readonly heroNoteTitle = 'Based in Florida. Available for travel.';
  protected readonly heroNoteBody =
    'From garden portraits and engagement sessions to wedding weekends and destination stories, every gallery is shaped with calm direction, genuine connection, and a refined editorial finish.';

  protected readonly heroMetrics: Metric[] = [
    { label: 'Posts shared', value: formatCount(PROFILE.postsCount) },
    { label: 'Followers', value: formatCount(PROFILE.followersCount) },
    { label: 'Booking path', value: 'DM + Linktree' },
  ];

  protected readonly collectionHighlights: CollectionHighlight[] = [
    {
      title: 'Weddings and custom coverage',
      description:
        'Wedding coverage is tailored around your timeline, travel, and celebration so the experience feels personal from start to finish.',
      details: 'Reach out for a custom proposal built around your date, destination, and vision.',
      price: 'Custom quote',
    },
    {
      title: 'Portraits, couples, and milestones',
      description:
        'Couples, graduates, families, and growing families can book relaxed sessions that feel effortless, warm, and true to life.',
      details:
        'Portrait sessions begin at $180, with couples, engagement, and maternity coverage starting between $200 and $225.',
      price: 'From $180',
    },
    {
      title: 'Branding and automotive work',
      description:
        'Branding and automotive sessions bring the same cinematic eye to launches, personal brands, and passion projects.',
      details: 'Branding begins at $200 and automotive sessions begin at $150.',
      price: 'From $150',
    },
  ];

  protected readonly serviceGroups: ServiceGroup[] = [
    {
      label: 'Portrait and milestone sessions',
      summary: 'Starting rates for portraits, family milestones, maternity, and newborn stories.',
      items: [
        { name: 'Graduation', price: '$200' },
        { name: 'Portraits', price: '$180' },
        { name: 'Family', price: '$250' },
        { name: 'Maternity', price: '$200' },
        { name: 'Baby / newborn', price: '$300' },
      ],
    },
    {
      label: 'Couples and wedding inquiries',
      summary:
        'Couples and engagement sessions can be booked directly, while wedding collections are tailored to the celebration.',
      items: [
        { name: 'Couple', price: '$200' },
        { name: 'Engagement', price: '$225' },
        { name: 'Wedding coverage', price: 'Custom quote' },
        { name: 'Travel weddings', price: 'Custom quote' },
      ],
    },
    {
      label: 'Brand and specialty sessions',
      summary:
        'Specialty sessions for creative brands and automotive stories with the same polished, story-driven approach.',
      items: [
        { name: 'Branding', price: '$200' },
        { name: 'Automotive', price: '$150' },
      ],
    },
  ];

  protected readonly portfolioFrames: GalleryFrame[] = [
    {
      eyebrow: 'Mar 13 post',
      title: 'A cinematic couples session on wheels',
      caption:
        'A Florida couples session with vintage character, clean light, and editorial energy.',
      displayUrl: RECENT_POSTS[1].displayUrl,
      assetPath: RECENT_POSTS[1].assetPath,
      alt: RECENT_POSTS[1].alt,
      href: RECENT_POSTS[1].href,
    },
    {
      eyebrow: 'Mar 11 post',
      title: 'Romance at Bok Tower Gardens',
      caption:
        'Romantic portraits framed by lush gardens, architectural lines, and an easy sense of movement.',
      displayUrl: RECENT_POSTS[2].displayUrl,
      assetPath: RECENT_POSTS[2].assetPath,
      alt: RECENT_POSTS[2].alt,
      href: RECENT_POSTS[2].href,
    },
    {
      eyebrow: 'Feb 20 post',
      title: 'Engagement sessions in full bloom',
      caption:
        'A sunlit Bonnet Springs session that invites couples to document this season beautifully.',
      displayUrl: RECENT_POSTS[6].displayUrl,
      assetPath: RECENT_POSTS[6].assetPath,
      alt: RECENT_POSTS[6].alt,
      href: RECENT_POSTS[6].href,
    },
    {
      eyebrow: 'Feb 11 post',
      title: 'Glow-forward maternity portraits',
      caption:
        'Soft, intimate maternity portraits designed to feel natural, heartfelt, and full of anticipation.',
      displayUrl: RECENT_POSTS[7].displayUrl,
      assetPath: RECENT_POSTS[7].assetPath,
      alt: RECENT_POSTS[7].alt,
      href: RECENT_POSTS[7].href,
    },
  ];

  protected readonly heroFeatureFrame = this.portfolioFrames[0];
  protected readonly heroFrames: GalleryFrame[] = this.portfolioFrames.slice(1, 3);

  protected readonly socialFrames: GalleryFrame[] = RECENT_POSTS.slice(0, 6).map((post) => ({
    eyebrow: `${post.dateLabel} | ${post.type === 'Video' ? 'Reel' : 'Post'}`,
    title: postHeadline(post),
    caption: postMeta(post),
    displayUrl: post.displayUrl,
    assetPath: post.assetPath,
    alt: post.alt,
    href: post.href,
  }));

  protected readonly instagramStats: Metric[] = [
    { label: 'posts', value: formatCount(PROFILE.postsCount) },
    { label: 'followers', value: formatCount(PROFILE.followersCount) },
    { label: 'highlights', value: formatCount(PROFILE.highlightsCount) },
  ];

  protected readonly trustNotes: ExperienceNote[] = [
    {
      title: 'Natural light and timeless storytelling',
      body: 'Natural light and timeless storytelling guide every gallery, keeping the work warm, honest, and lasting.',
      accent: 'Bio',
    },
    {
      title: 'Florida base with travel built in',
      body: 'Based in Florida and available for travel, Jack photographs everything from local sessions to destination celebrations with the same calm direction.',
      accent: 'Travel',
    },
    {
      title: 'A real audience and active archive',
      body: `${formatCount(PROFILE.postsCount)} posts, ${formatCount(PROFILE.followersCount)} followers, and ${formatCount(PROFILE.highlightsCount)} highlights create a client-ready presence with real momentum behind it.`,
      accent: 'Proof',
    },
  ];

  protected readonly processSteps: ProcessStep[] = [
    {
      phase: '01',
      step: 'Discover',
      title: 'Explore the session that fits your season',
      description:
        'Browse weddings, couples, portraits, maternity, family, branding, and automotive work to find the coverage that feels right.',
    },
    {
      phase: '02',
      step: 'Inquire',
      title: 'Share your date, vision, and location',
      description:
        'Build a polished first message here, then continue the conversation through Instagram or email.',
    },
    {
      phase: '03',
      step: 'Plan',
      title: 'Refine the details together',
      description:
        'Location ideas, timing, travel, and the overall feel of the session are tailored around your story.',
    },
    {
      phase: '04',
      step: 'Shoot',
      title: 'Settle in and let the moments unfold',
      description:
        'On the day, Jack keeps the experience relaxed and guided so the images feel natural, connected, and beautifully composed.',
    },
  ];

  protected readonly experienceNotes: ExperienceNote[] = [
    {
      title: 'Couples, portraits, and motion-led storytelling',
      body: 'Recent work moves from car-culture couples sessions to movement-focused portraits and cinematic reels, keeping the portfolio fresh and modern.',
      accent: 'Recent',
    },
    {
      title: 'Engagements and maternity sessions are in season',
      body: 'Recent booking posts make it easy for couples and growing families to step into this chapter with confidence.',
      accent: 'Bookable',
    },
    {
      title: 'A simple inquiry path that feels personal',
      body: `Instagram and ${PROFILE.externalUrl.replace('https://', '')} keep the next step familiar, fast, and easy to follow.`,
      accent: 'Linked',
    },
  ];

  protected readonly inquiryForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    sessionType: ['', Validators.required],
    vision: ['', [Validators.required, Validators.minLength(12)]],
  });

  protected readonly submitted = signal(false);
  protected readonly inquiryDraft = signal('');
  protected readonly copyFeedback = signal('');
  protected readonly activePortfolioIndex = signal(0);
  protected readonly portfolioTransitionDirection = signal<'up' | 'down'>('down');
  protected readonly activePortfolioTransitionKey = computed(
    () => `${this.activePortfolioIndex()}-${this.portfolioTransitionDirection()}`,
  );
  protected readonly activePortfolioFrame = computed(
    () => this.portfolioFrames[this.activePortfolioIndex()] ?? this.portfolioFrames[0],
  );

  private setActivePortfolioIndex(index: number, direction: 'up' | 'down'): void {
    if (index === this.activePortfolioIndex()) {
      return;
    }

    this.portfolioTransitionDirection.set(direction);
    this.activePortfolioIndex.set(index);
  }

  protected controlInvalid(controlName: string): boolean {
    const control = this.inquiryForm.get(controlName);
    return Boolean(control && control.invalid && (control.touched || this.submitted()));
  }

  protected scrollToId(targetId: string): void {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return;
    }

    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    this.isNavDrawerOpen.set(false);

    const topbarHeight =
      document.querySelector<HTMLElement>('.topbar')?.getBoundingClientRect().height ?? 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - topbarHeight - 24;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth',
    });
  }

  protected openInstagram(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.isNavDrawerOpen.set(false);
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  }

  protected toggleNavDrawer(): void {
    this.isNavDrawerOpen.update((isOpen) => !isOpen);
  }

  protected submitInquiry(): void {
    this.submitted.set(true);
    this.copyFeedback.set('');

    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }

    const { name, email, sessionType, vision } = this.inquiryForm.getRawValue();

    this.inquiryDraft.set(
      [
          'Hi Jack Garcia Co.,',
        '',
        `My name is ${name}, and I would love to book a ${sessionType} session.`,
        `You can reach me at ${email}.`,
        '',
        `Here is what I am envisioning: ${vision}`,
        '',
        'I would love to hear about availability and next steps.',
        '',
        'Thank you!',
      ].join('\n'),
    );

    void this.copyInquiry();
  }

  protected async copyInquiry(): Promise<void> {
    const inquiryDraft = this.inquiryDraft();

    if (!inquiryDraft) {
      return;
    }

    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      this.copyFeedback.set('Select the brief below and paste it into your message to Jack.');
      return;
    }

    try {
      await navigator.clipboard.writeText(inquiryDraft);
      this.copyFeedback.set(
        'Inquiry brief copied. Paste it into Instagram or email whenever you are ready to send it.',
      );
    } catch {
      this.copyFeedback.set(
        'Copy was blocked, but the brief is ready below for you to copy manually.',
      );
    }
  }

  async ngAfterViewInit(): Promise<void> {
    if (typeof window === 'undefined' || /jsdom/i.test(window.navigator.userAgent)) {
      return;
    }

    const reducedMotionQuery = this.reducedMotionQuery;

    if (reducedMotionQuery) {
      const syncReducedMotionPreference = (event?: MediaQueryListEvent): void => {
        this.prefersReducedMotion.set(event?.matches ?? reducedMotionQuery.matches);
      };

      syncReducedMotionPreference();

      if (typeof reducedMotionQuery.addEventListener === 'function') {
        reducedMotionQuery.addEventListener('change', syncReducedMotionPreference);
        this.destroyRef.onDestroy(() =>
          reducedMotionQuery.removeEventListener('change', syncReducedMotionPreference),
        );
      } else {
        reducedMotionQuery.addListener(syncReducedMotionPreference);
        this.destroyRef.onDestroy(() =>
          reducedMotionQuery.removeListener(syncReducedMotionPreference),
        );
      }
    }

    if (this.prefersReducedMotion()) {
      return;
    }

    const blocks = this.revealBlocks?.toArray().map((block) => block.nativeElement) ?? [];
    const portfolioItems = this.portfolioItems?.toArray().map((item) => item.nativeElement) ?? [];

    if (!blocks.length) {
      return;
    }

    const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]);

    gsap.registerPlugin(ScrollTrigger);

    const compactViewport = window.matchMedia('(max-width: 768px)').matches;

    blocks.forEach((block, index) => {
      gsap.from(block, {
        opacity: 0,
        y: compactViewport ? 28 : 52,
        duration: compactViewport ? 0.65 : 0.9,
        ease: 'power2.out',
        delay: (index % 3) * 0.05,
        scrollTrigger: {
          trigger: block,
          start: compactViewport ? 'top 92%' : 'top 84%',
          once: true,
        },
      });
    });

    portfolioItems.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: compactViewport ? 'top 72%' : 'top center',
        end: compactViewport ? 'bottom 45%' : 'bottom center',
        onEnter: () => this.setActivePortfolioIndex(index, 'down'),
        onEnterBack: () => this.setActivePortfolioIndex(index, 'up'),
      });
    });

    this.destroyRef.onDestroy(() => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    });
  }
}
