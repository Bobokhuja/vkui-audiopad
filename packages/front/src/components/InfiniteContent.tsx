import { UseMutationResult } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Content } from "./Content";

type Props = {
    children: React.ReactNode;
    hasMore: boolean;
    loadMoreMutation: UseMutationResult<any, any, any>;
    loadMoreArgs?: any;
    isLoading?: boolean;
    error?: any;
};

export const InfinityContent: FC<Props> = ({ children, hasMore, loadMoreMutation, loadMoreArgs, isLoading, error }) => {
    const { ref, inView } = useInView({ skip: !hasMore });

    useEffect(() => {
        if (hasMore && inView && !loadMoreMutation.isLoading) {
            loadMoreMutation.mutate(loadMoreArgs);
        }
    }, [inView, hasMore, loadMoreMutation.isLoading]);

    return (
        <Content
            loading={!!isLoading || loadMoreMutation.isLoading}
            error={error}
        >
            {children}
            {hasMore && <div ref={ref}></div>}
        </Content>
    );
};
