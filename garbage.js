const homepage = {
    populate: {
        blocks: {
            on: {
                "blocks.hero-section": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                        bg_image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
                "elements.logo": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
                "homepage.founder-note": {
                    populate: {
                        video: {
                            populate: {
                                poster: {
                                    fields: ["url", "alternativeText"],
                                },
                                video: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
                "homepage.evaluation-methodologies": {
                    populate: {
                        video: {
                            populate: {
                                poster: { fields: ["url", "alternativeText"] },
                                video: { fields: ["url", "alternativeText"] },
                            },
                        },
                    },
                },
                "homepage.expert-services": {
                    populate: {
                        cardDetails: {
                            populate: {
                                imagePath: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        bookAppointment: true,
                        why_us: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                                small_component: true,
                            },
                        },
                    },
                },
                "homepage.common-quote": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
                "homepage.health-requirement": {
                    populate: {
                        simple_card: true,
                    },
                },
                "homepage.vibe-section": {
                    populate: {
                        carousel: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
                "homepage.testimonials": {
                    populate: {
                        testimonials: {
                            populate: {
                                profile: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
                "homepage.feedback": {
                    populate: {
                        qr_code: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        cat: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
            },
        },
        seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                socialNetwork: {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
    },
};
