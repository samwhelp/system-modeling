

	<!-- Tiling Window (North-South) (Top-Bottom) -->
	<keybind key="A-C-i">
		<action name="Undecorate"/>
		<action name="UnmaximizeFull"/>
		<action name="MoveResizeTo">
			<height>50%</height>
		</action>
		<action name="MaximizeHorz"/>
		<action name="MoveResizeTo">
			<x>0</x>
			<y>0</y>
		</action>
		<action name="NextWindow">
			<interactive>no</interactive>
			<dialog>none</dialog>
			<finalactions>
				<action name="Undecorate"/>
				<action name="UnmaximizeFull"/>
				<action name="MoveResizeTo">
					<height>50%</height>
				</action>
				<action name="MaximizeHorz"/>
				<action name="MoveResizeTo">
					<x>0</x>
					<y>-0</y>
				</action>
			</finalactions>
		</action>
	</keybind>


	<!-- Tiling Window (West-East) (Left-Right) -->
	<keybind key="A-C-o">
		<action name="Undecorate"/>
		<action name="UnmaximizeFull"/>
		<action name="MoveResizeTo">
			<width>50%</width>
		</action>
		<action name="MaximizeVert"/>
		<action name="MoveResizeTo">
			<x>0</x>
			<y>0</y>
		</action>
		<action name="NextWindow">
			<interactive>no</interactive>
			<dialog>none</dialog>
			<finalactions>
				<action name="Undecorate"/>
				<action name="UnmaximizeFull"/>
				<action name="MoveResizeTo">
					<width>50%</width>
				</action>
				<action name="MaximizeVert"/>
				<action name="MoveResizeTo">
					<x>-0</x>
					<y>0</y>
				</action>
			</finalactions>
		</action>
	</keybind>


	<!-- Restore window dimensions -->
	<keybind key="A-C-u">
		<action name="UnmaximizeFull"/>
		<action name="Decorate"/>
		<action name="NextWindow">
			<interactive>no</interactive>
			<dialog>none</dialog>
			<finalactions>
				<action name="UnmaximizeFull"/>
				<action name="Decorate"/>
			</finalactions>
		</action>
	</keybind>




	<!-- Version: Up Left Right //-->
	<!-- Tiling Window (North-South) (Top-Bottom) -->
	<keybind key="A-Up">
		<action name="Undecorate"/>
		<action name="UnmaximizeFull"/>
		<action name="MoveResizeTo">
			<height>50%</height>
		</action>
		<action name="MaximizeHorz"/>
		<action name="MoveResizeTo">
			<x>0</x>
			<y>0</y>
		</action>
		<action name="NextWindow">
			<interactive>no</interactive>
			<dialog>none</dialog>
			<finalactions>
				<action name="Undecorate"/>
				<action name="UnmaximizeFull"/>
				<action name="MoveResizeTo">
					<height>50%</height>
				</action>
				<action name="MaximizeHorz"/>
				<action name="MoveResizeTo">
					<x>0</x>
					<y>-0</y>
				</action>
			</finalactions>
		</action>
	</keybind>


	<!-- Tiling Window (West-East) (Left-Right) -->
	<keybind key="A-Right">
		<action name="Undecorate"/>
		<action name="UnmaximizeFull"/>
		<action name="MoveResizeTo">
			<width>50%</width>
		</action>
		<action name="MaximizeVert"/>
		<action name="MoveResizeTo">
			<x>0</x>
			<y>0</y>
		</action>
		<action name="NextWindow">
			<interactive>no</interactive>
			<dialog>none</dialog>
			<finalactions>
				<action name="Undecorate"/>
				<action name="UnmaximizeFull"/>
				<action name="MoveResizeTo">
					<width>50%</width>
				</action>
				<action name="MaximizeVert"/>
				<action name="MoveResizeTo">
					<x>-0</x>
					<y>0</y>
				</action>
			</finalactions>
		</action>
	</keybind>


	<!-- Restore window dimensions -->
	<keybind key="A-Left">
		<action name="UnmaximizeFull"/>
		<action name="Decorate"/>
		<action name="NextWindow">
			<interactive>no</interactive>
			<dialog>none</dialog>
			<finalactions>
				<action name="UnmaximizeFull"/>
				<action name="Decorate"/>
			</finalactions>
		</action>
	</keybind>


<?php
/*

## Help

* https://askubuntu.com/questions/516303/tiling-windows-horizontally-and-vertically-under-lubuntu-lxde-openbox
* http://openbox.org/wiki/Help:Actions#MoveResizeTo

*/
?>
