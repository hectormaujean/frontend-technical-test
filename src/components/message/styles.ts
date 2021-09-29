import { grey, orange } from "@mui/material/colors"

export const getBubbleStyles = (isLoggedUserMessage: boolean, authorId: number, previousMessageAuthor: number, nextMessageAuthor: number) => {
    const baseStyle = {
        width: 'fit-content',
        maxWidth: { xs: "80%", sm: "70%", md: "60%" },
        marginBottom: nextMessageAuthor === authorId ? 0.5 : 1.5,
        backgroundColor: isLoggedUserMessage ? orange[700] : grey[300],
        marginRight: isLoggedUserMessage ? 1 : 0,
        marginLeft: isLoggedUserMessage ? 'auto' : 1,
        color: isLoggedUserMessage ? grey[100] : grey[900],
    }
    
    const customStyle = isLoggedUserMessage ? {
        borderTopLeftRadius: "18px",
        borderTopRightRadius: previousMessageAuthor === authorId ? "4px" : "18px",
        borderBottomRightRadius: nextMessageAuthor === authorId ? "4px" : "18px",
        borderBottomLeftRadius: "18px",
    } : {
        borderTopLeftRadius:
            previousMessageAuthor === authorId ? "4px" : "18px",
        borderTopRightRadius: "18px",
        borderBottomRightRadius: "18px",
        borderBottomLeftRadius: nextMessageAuthor === authorId ? "4px" : "18px",
    }

    return { ...baseStyle, ...customStyle };
}