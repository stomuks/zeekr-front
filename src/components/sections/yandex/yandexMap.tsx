'use client'
import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

export default function YandexMap() {
	const defaultState = {
		center: [53.925086, 27.608362],
		zoom: 15
	}

	return (
		<YMaps>
			<Map defaultState={defaultState} width='100%' height='100%'>
				<Placemark
					geometry={[53.92548, 27.620535]}
					options={{ preset: 'islands#nightDotIcon' }}
				/>
			</Map>
		</YMaps>
	)
}
