"use client";

import { useSearchParams } from "next/navigation";
import React, { useRef, useEffect } from "react";

type Props = {
    title: string;
    onClose: () => void;
    onOk: () => void;
    children: React.ReactNode;
};

const Dialog = ({ title, onClose, onOk, children }: Props) => {
    const searchParams = useSearchParams();
    const dialogRef = useRef<null | HTMLDialogElement>(null);
    const showDialog = searchParams.get("showDialog");

    useEffect(() => {
        if (showDialog === "y") {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [showDialog]);

    const closeDialog = () => {
        dialogRef.current?.close();
        onClose();
    };

    const clickOk = () => {
        onOk();
        closeDialog();
    };

    const dialog: React.JSX.Element | null =
        showDialog === "y" ? (
            <dialog
                ref={dialogRef}
                className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10 rounded-xl backdrop:bg-gray-800/50"
                onClick={closeDialog}
            >
                <div className="w-[500px] max-w-full bg-gray-200 flex flex-col">
                    <div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400">
                        <h1 className="text-2xl">{title}</h1>
                        <button
                            type="button"
                            onClick={closeDialog}
                            className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-500 text-white"
                        >
                            X
                        </button>
                    </div>
                    <div className="px-5 pb-6">
                        {children}
                        <div className="flex flex-row justify-end">
                            <button
                                type="button"
                                onClick={clickOk}
                                className="py-1 px-2 cursor-pointer rounded border-none font-bold bg-green-500 text-white"
                            >
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        ) : null;

    return dialog;
};

export default Dialog;
