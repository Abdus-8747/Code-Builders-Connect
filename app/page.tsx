import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";
import { Calendar, Users, Rocket, Code2, Sparkles, Heart, Lightbulb, Link2, Target } from "lucide-react";
import Link from "next/link";
import events from "@/lib/constants";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Page = async () => {
    'use cache';
    cacheLife('hours')
   // const response = await fetch(`${BASE_URL}/api/events`, { next: { revalidate: 3600 } });
    //const { events } = await response.json();

    return (
        <section>
            {/* Brand Badge */}
            <div className="flex-center mb-13">
                <div className="pill flex items-center gap-2 bg-dark-200">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-primary font-semibold">DEV CULTURE</span>
                </div>
            </div>

            <section className="text-center mb-16 px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                    Discover. <span className="text-primary">Build.</span> Innovate. <br />
                    The Ultimate Developer Event Hub
                </h1>

                <p className="text-lg md:text-xl text-light-200 max-w-2xl mx-auto mb-6">
                    Explore hackathons, meetups, and global dev conferences — all curated for
                    passionate builders like you.
                </p>

                <p className="text-primary font-semibold text-base md:text-lg mb-10 animate-pulse">
                    Collaborate. Code. Create. Turn your ideas into impact.
                </p>

                {/* CTA Buttons */}
                <div className="flex justify-center gap-4">
                    <Link href="#events" className="px-6 py-3 bg-primary text-dark-100 font-semibold rounded-2xl hover:bg-light-100 hover:text-dark-200 transition-all duration-300 shadow-lg shadow-primary/30">
                        Explore Events
                    </Link>
                    <Link href="/events/create" className="scroll-smooth px-6 py-3 border border-primary text-primary rounded-2xl hover:bg-primary hover:text-dark-100 transition-all duration-300">
                        Host an Event
                    </Link>
                </div>

                {/* Animated gradient divider */}
                <div className="mt-10 h-1.5 w-30 mx-auto bg-gradient-to-r from-blue-400 via-primary to-pink-400 animate-gradient-x rounded-full"></div>
            </section>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-16">
                <div className="glass p-8 flex flex-col items-center gap-4 hover:border-primary/50 transition-all duration-300">
                    <div className="p-4 bg-primary/10 rounded-lg">
                        <Calendar className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-1">500+</div>
                        <div className="text-light-200 text-sm">Events Monthly</div>
                    </div>
                </div>
                <div className="glass p-8 flex flex-col items-center gap-4 hover:border-primary/50 transition-all duration-300">
                    <div className="p-4 bg-primary/10 rounded-lg">
                        <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-1">50K+</div>
                        <div className="text-light-200 text-sm">Active Developers</div>
                    </div>
                </div>
                <div className="glass p-8 flex flex-col items-center gap-4 hover:border-primary/50 transition-all duration-300">
                    <div className="p-4 bg-primary/10 rounded-lg">
                        <Rocket className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-1">1K+</div>
                        <div className="text-light-200 text-sm">Projects Launched</div>
                    </div>
                </div>
            </div>

            {/* About Code Builders Section */}
            <div className="py-16 mb-16">
                <div className="glass p-10 border-primary/20">
                    <div className="text-center mb-10">
                        <div className="flex-center mb-4">
                            <div className="pill bg-primary/20">
                                <span className="text-primary font-semibold">About DEV CULTURE</span>
                            </div>
                        </div>
                        <h3 className="text-4xl mb-4">Empowering Developers, One Event at a Time</h3>
                        <p className="text-light-100 text-lg max-w-3xl mx-auto">
                            DEV CULTURE is a thriving developer community dedicated to fostering innovation, collaboration, and growth among developers of all skill levels. We believe in the power of community-driven learning and hands-on experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        <div className="bg-dark-100/50 border border-dark-200 rounded-lg p-6 text-center">
                            <div className="flex-center mb-4">
                                <div className="p-3 bg-blue/10 rounded-lg">
                                    <Target className="w-8 h-8 text-blue" />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3">Our Mission</h3>
                            <p className="text-light-200 text-sm">
                                To create a vibrant ecosystem where developers can discover, participate in, and organize impactful tech events that drive innovation and career growth.
                            </p>
                        </div>

                        <div className="bg-dark-100/50 border border-dark-200 rounded-lg p-6 text-center">
                            <div className="flex-center mb-4">
                                <div className="p-3 bg-blue/10 rounded-lg">
                                    <Lightbulb className="w-8 h-8 text-blue" />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3">What We Do</h3>
                            <p className="text-light-200 text-sm">
                                We organize hackathons, workshops, meetups, and conferences that bring together developers, designers, and tech enthusiasts to learn, build, and network.
                            </p>
                        </div>

                        <div className="bg-dark-100/50 border border-dark-200 rounded-lg p-6 text-center">
                            <div className="flex-center mb-4">
                                <div className="p-3 bg-blue/10 rounded-lg">
                                    <Heart className="w-8 h-8 text-blue" />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3">Our Community</h3>
                            <p className="text-light-200 text-sm">
                                A diverse, inclusive space for beginners to experts. We celebrate collaboration over competition and believe everyone has something valuable to contribute.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-border-dark">
                        <p className="text-center text-light-100 text-lg">
                            <span className="text-primary font-semibold">DEV CULTURE</span> is your central hub for staying updated on all DEV CULTURE events.
                            From registration details to event schedules, we've got everything you need to participate and make the most of every opportunity.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Join Section */}
            <div className="py-16">
                <div className="text-center mb-12">
                    <h3 className="text-4xl mb-4">Why Join DEV CULTURE?</h3>
                    <p className="text-light-200 text-lg">Everything you need to accelerate your developer journey</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-dark-100 border border-dark-200 rounded-lg p-6 hover:border-primary/30 transition-all duration-300 card-shadow">
                        <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                            <Code2 className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="mb-3">Learn & Grow</h3>
                        <p className="text-light-200 text-sm">Access cutting-edge workshops, technical talks, and hands-on coding sessions led by industry veterans.</p>
                    </div>
                    <div className="bg-dark-100 border border-dark-200 rounded-lg p-6 hover:border-primary/30 transition-all duration-300 card-shadow">
                        <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                            <Users className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="mb-3">Network</h3>
                        <p className="text-light-200 text-sm">Connect with like-minded developers, potential collaborators, and tech leaders from around the globe.</p>
                    </div>
                    <div className="bg-dark-100 border border-dark-200 rounded-lg p-6 hover:border-primary/30 transition-all duration-300 card-shadow">
                        <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                            <Rocket className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="mb-3">Build & Ship</h3>
                        <p className="text-light-200 text-sm">Turn ideas into reality through hackathons, get feedback, and launch projects that matter.</p>
                    </div>
                </div>
            </div>

            <div className="mt-20 space-y-7">
                <div className="mb-8">
                    <h3>Featured Events</h3>
                    <p className="text-light-200 mt-2">Handpicked opportunities to level up your skills</p>
                </div>

                <ul className="events" id="events">
                    {events && events.length > 0 && events.map((event: IEvent) => (
                        <li key={event.title} className="list-none">
                            <EventCard {...event} />
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA Section */}
            <div className="py-20 mt-16">
                <div className="glass p-12 text-center border-primary/20">
                    <h3 className="text-4xl mb-4">Ready to Start Building?</h3>
                    <p className="text-light-100 text-lg mb-8 max-w-2xl mx-auto">
                        Join thousands of developers who are learning, networking, and shipping amazing projects through DEV CULTURE.
                    </p>
                    <a href="#"><button
                        className="bg-primary hover:bg-primary/90 px-8 py-4 rounded-full font-semibold text-black transition-all duration-300 hover:scale-105">
                        Get Started Today
                    </button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Page;