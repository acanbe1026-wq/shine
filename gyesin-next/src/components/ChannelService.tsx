'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        ChannelIO?: any;
        ChannelIOInitialized?: boolean;
    }
}

export default function ChannelService() {
    useEffect(() => {
        (function () {
            var w = window;
            if (w.ChannelIO) {
                return;
            }
            var ch = function () {
                // @ts-ignore
                ch.c(arguments);
            };
            // @ts-ignore
            ch.q = [];
            // @ts-ignore
            ch.c = function (args) {
                // @ts-ignore
                ch.q.push(args);
            };
            w.ChannelIO = ch;
            function l() {
                if (w.ChannelIOInitialized) {
                    return;
                }
                w.ChannelIOInitialized = true;
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                var x = document.getElementsByTagName('script')[0];
                if (x.parentNode) {
                    x.parentNode.insertBefore(s, x);
                }
            }
            if (document.readyState === 'complete') {
                l();
            } else {
                w.addEventListener('DOMContentLoaded', l);
                w.addEventListener('load', l);
            }
        })();

        if (window.ChannelIO) {
            window.ChannelIO('boot', {
                pluginKey: '7cbb2b03-5385-4133-aefb-60a264cb60bc',
            });
        }

        return () => {
            if (window.ChannelIO) {
                window.ChannelIO('shutdown');
            }
        }
    }, []);

    return null;
}
