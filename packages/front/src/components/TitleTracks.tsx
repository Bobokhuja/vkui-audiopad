import { baseTypes } from "@vk-audiopad/common";
import { Group, Header } from "@vkontakte/vkui";
import { FC } from "react";
import { Track } from "./Track";

type Props = {
    playlist: baseTypes.TTitlePlaylist;
};

export const TitleTracks: FC<Props> = ({ playlist }) => {
    return (
        <Group
            mode="plain"
            header={<Header>{playlist.title}</Header>}
        >
            {playlist.tracks.map((track, index) =>
                <Track
                    key={track.id}
                    playlist={playlist}
                    track={track}
                    trackIndex={index}
                />
            )}
        </Group>
    );
};
