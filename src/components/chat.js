import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PeopleList, MessagesList } from 'containers';
import store from 'store';

export default class Chat extends Component {
	render() {
		return (
			<Provider store={store}>
				<div class="container clearfix">
					<PeopleList />
					<MessagesList />
				</div>
			</Provider>
		);
	}
}
