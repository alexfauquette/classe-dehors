import React from 'react';
import { MultiViewsList, SimpleList } from '@semapps/archipelago-layout';
import { MapList } from '@semapps/geo-components';
import { Avatar } from "@material-ui/core";
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';
import PlaceIcon from '@material-ui/icons/Place';

const PlaceList = props => (
  <MultiViewsList
    views={{
      map: {
        label: 'Carte',
        icon: MapIcon,
        perPage: 500,
        pagination: false,
        list: (
          <MapList
            latitude={record => record?.['pair:hasPostalAddress']?.['pair:latitude']}
            longitude={record => record?.['pair:hasPostalAddress']?.['pair:longitude']}
            label={record => record?.['pair:label']}
            description={record => record?.['pair:hasPostalAddress']?.['pair:label']}
            scrollWheelZoom
          />
        )
      },
      list: {
        label: 'Liste',
        icon: ListIcon,
        sort: { field: 'pair:label', order: 'DESC' },
        perPage: 25,
        list: (
          <SimpleList
            primaryText={record => record['pair:label']}
            secondaryText={record => record['pair:hasPostalAddress']?.['pair:label']}
            leftAvatar={() => (
              <Avatar width="100%">
                <PlaceIcon />
              </Avatar>
            )}
            linkType="show"
          />
        )
      }
    }}
    {...props}
  />
);

export default PlaceList;
