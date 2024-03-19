export const CardHeader = ({title = 'Заголовок карточки' }) => {
    return (
        <>
            <header class="card-header">
                <p class="card-header-title">
                    {title}
                </p>
            </header>
        </>
    )
}
