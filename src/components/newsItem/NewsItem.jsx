import moment from 'moment';
import React from 'react';

import style from "./NewsItem.module.css";

const NewsItem = ({data}) => {

    const  { url, name, image, description, datePublished, provider} = data;

    return (
        <div className={style.container}>
            <a href={url} rel="noreferrer" target="_blank">
                <div className={style.titleContainer}>
                    <h3>{name}</h3>
                    <img src={image?.thumbnail.contentUrl} alt="news" />
                </div>
                
                <p>
                    {description.length > 100 ? `${description.substring(0,100)}...` : description}
                </p>
                <div className={style.bottom}>
                    <div className={style.provider}> 
                        {
                            provider[0]?.image?.thumbnail?.contentUrl && <img src={provider[0]?.image?.thumbnail?.contentUrl} alt="newsprovider"/>
                        }
                        <span>{provider[0]?.name}</span>
                    </div>
                        <span>{moment(datePublished).startOf('ss').fromNow()}</span>
                </div>
            </a>
        </div>
    );
};

export default NewsItem;