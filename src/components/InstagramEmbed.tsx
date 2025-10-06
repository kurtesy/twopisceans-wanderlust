import React from 'react';
import { InstagramEmbed as ReactInstagramEmbed } from 'react-social-media-embed';

interface InstagramEmbedProps {
    url: string;
}

export const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
    return (
        // The library handles responsive sizing, so we can wrap it
        // and let the parent container on the Reels page control the width.
        <div style={{ width: '100%', maxWidth: '375px' }}>
            <ReactInstagramEmbed url={url} width="100%"
            />
        </div>
    );
};