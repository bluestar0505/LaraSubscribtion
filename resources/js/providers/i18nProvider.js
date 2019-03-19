const messages = {
    en: {
        customers: {
        	create: {
        		success: 'Customer created',
        	},
        	edit: {
        		success: 'Customer info updated',
        	},
        	delete: {
        		success: 'Customer removed',
        	},
        	error: '%{message}',
        },
        agents: {
            create: {
                success: 'Agent created',
            },
            edit: {
                success: 'Agent info updated',
            },
            delete: {
                success: 'Agent removed'
            },
            error: '%{message}',
        },
        subscribtions: {
            create: {
                success: 'Subscription created',
            },
            edit: {
                success: 'Subscription info updated',
            },
            update:{
            	success: 'Subscription info updated',
            },
            delete: {
                success: 'Subscription removed'
            },
            cycles: {
            	create: {
            		success: 'Cycle added',
            	},
            },
            paused: {
            	success: 'Subscription paused',
            },
            cancelled: {
            	success: 'Subscription cancelled',
            },
            resumed: {
            	success: 'Subscription resumed',
            },
            restored: {
            	success: 'Subscription restored',
            },
            error: '%{message}',
        },
        servers: {
            create: {
                success: 'Server created',
            },
            edit: {
                success: 'Server info updated',
            },
            delete: {
                success: 'Server removed'
            },
            error: '%{message}',
        },
        applications: {
        	create: {
        		success: 'Application created',
        	},
        	update: {
        		success: 'Application updated',
        	},
        	delete: {
        		success: 'Application removed',
        	},
        	error: '%{message}',
        }
    }
};

const i18nProvider = (locale) => messages[locale];

export default i18nProvider;