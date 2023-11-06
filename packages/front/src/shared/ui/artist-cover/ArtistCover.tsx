import { Div, Gradient, Title } from "@vkontakte/vkui";
import { FC } from "react";
import "./ArtistCover.css";

type ArtistCoverProps = {
    title: string;
    backgroundImage: string;
};

export const ArtistCover: FC<ArtistCoverProps> = ({ title, backgroundImage }) => {
    const gradientStyle = {
        backgroundImage: !!backgroundImage
            ? `linear-gradient(to bottom,var(--vkui--gradient_black)),${backgroundImage}`
            : "",
        backgroundSize: "cover",
        backgroundPosition: "center center",
    };

    return (
        <Gradient
            className="vkap_artist_cover_gradient"
            style={gradientStyle}
        >
            <Div className="vkap_artist_cover_div">
                <Title className="vkap_artist_code_title">{title}</Title>
            </Div>
        </Gradient>
    );
};
