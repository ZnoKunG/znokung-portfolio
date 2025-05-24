export default function TabButtons({ data })
{
    return (
        <div className={'tab_header'}>
            { data.map((item, index) => (
                <li
                    className={'tab_button'}
                    key={item.data}
                    onClick={() => setActiveTab(index)}>
                    {item.data}
                </li>
            ))}
        </div>
    )
}