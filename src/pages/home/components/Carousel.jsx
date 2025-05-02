import React, { memo } from 'react'
import { connect } from 'react-redux'

function Carousel(props) {
    return (
        <div className="py-12 lg:py-24 px-[20px] md:px-[40px]">
            {Array.isArray(props.bannerImage) && props.bannerImage?.length > 0 && (
                <div className="flex flex-col gap-2 md:gap-0 md:flex-row w-full">
                    {props.bannerImage.map((item, index) => (
                        <div key={index} className="flex-1">
                            <img
                                src={item.image}
                                className="w-full h-96 lg:h-[90%] object-cover"
                                alt="Изображение недоступно"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        bannerImage: state.rootReducer.bannerImage
    }
}

export default connect(mapStateToProps, null)(memo(Carousel))