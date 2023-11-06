import { utils } from "@vk-audiopad/common";
import { Cell, Separator } from "@vkontakte/vkui";
import { FC } from "react";
import { Duration } from "shared/ui/duration";
import { TTrackState } from "../model/types";
import "./TrackCell.css";
import { TrackImage } from "./TrackImage";

type TrackCellProps = {
    title: string;
    artist: React.ReactNode;
    duration: number;
    image: string;
    trackState: TTrackState;
    actions?: React.ReactNode;
    editMode?: boolean;
    onClick?: () => void;
    onAdd?: () => void;
    onRemove?: () => void;
    onDragFinish?: ({ from, to }: { from: number; to: number }) => void;
};

export const TrackCell: FC<TrackCellProps> = ({
    title,
    artist,
    duration,
    image,
    trackState,
    actions,
    editMode,
    onClick,
    onRemove,
    onDragFinish,
}) => {
    const disabled = trackState === "disabled";
    const showOverlay = !editMode || trackState !== "normal";

    return (
        <Cell
            className="vkap_track_cell"
            draggable={editMode}
            mode={editMode ? "removable" : undefined}
            onDragFinish={onDragFinish}
            onRemove={onRemove}
            disabled={disabled}
            onClick={onClick}
            before={
                <TrackImage
                    imageSrc={image}
                    trackState={trackState}
                    showOverlay={showOverlay}
                />
            }
            after={
                <>
                    <Separator />
                    {actions}
                    <Duration
                        className="vkap_track_cell_duration"
                        value={duration ? utils.toHHMMSS(duration) : ""}
                    />
                </>
            }
            subtitle={artist}
        >
            {disabled ? <span className="vkap_secondary_color">{title}</span> : title}
        </Cell>
    );
};
